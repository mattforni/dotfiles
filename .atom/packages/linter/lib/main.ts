import arrayUnique from 'lodash/uniq'
import { CompositeDisposable } from 'atom'

import UIRegistry from './ui-registry'
import IndieRegistry from './indie-registry'
import MessageRegistry from './message-registry'
import LinterRegistry from './linter-registry'
import EditorsRegistry from './editor-registry'
import { Commands, showDebug } from './commands'
import ToggleView from './toggle-view'
import type { UI, Linter as LinterProvider, Indie } from './types'

class Linter {
  private commands: Commands = new Commands()
  private registryUI?: UIRegistry
  private registryIndie?: IndieRegistry
  private registryEditors?: EditorsRegistry
  private registryLinters?: LinterRegistry
  private registryMessages?: MessageRegistry
  private subscriptions: CompositeDisposable = new CompositeDisposable()
  private idleCallbacks: Set<number> = new Set()

  constructor() {
    this.subscriptions.add(this.commands)

    this.commands.onShouldLint(() => {
      this.registryEditorsInit()
      const textEditor = atom.workspace.getActiveTextEditor()
      if (textEditor === undefined) {
        return
      }
      // this.registryEditors becomes valid inside registryEditorsInit
      const editorLinter = this.registryEditors!.get(textEditor)
      if (editorLinter) {
        editorLinter.lint()
      }
    })
    this.commands.onShouldToggleActiveEditor(() => {
      const textEditor = atom.workspace.getActiveTextEditor()
      if (textEditor === undefined) {
        return
      }
      this.registryEditorsInit()
      // this.registryEditors becomes valid inside registryEditorsInit
      const editor = this.registryEditors!.get(textEditor)
      if (editor) {
        editor.dispose()
      } else if (textEditor) {
        // this.registryEditors becomes valid inside registryEditorsInit
        this.registryEditors!.createFromTextEditor(textEditor)
      }
    })
    this.commands.onShouldDebug(async () => {
      this.registryUIInit()
      this.registryIndieInit()
      this.registryLintersInit()
      await showDebug(
        // this.registryLinters becomes valid inside registryLintersInit
        this.registryLinters!.getProviders(),
        // this.registryIndie becomes valid inside registryIndieInit
        this.registryIndie!.getProviders(),
        // this.registryUI becomes valid inside registryUIInit
        this.registryUI!.getProviders(),
      )
    })
    this.commands.onShouldToggleLinter(action => {
      this.registryLintersInit()
      // this.registryLinters becomes valid inside registryLintersInit
      const toggleView = new ToggleView(action, arrayUnique(this.registryLinters!.getProviders().map(linter => linter.name)))
      toggleView.onDidDispose(() => {
        this.subscriptions.remove(toggleView)
      })
      toggleView.onDidDisable(name => {
        // this.registryLinters becomes valid inside registryLintersInit
        const linter = this.registryLinters!.getProviders().find(entry => entry.name === name)
        if (linter) {
          this.registryMessagesInit()
          // this.registryMessages becomes valid inside registryMessagesInit
          this.registryMessages!.deleteByLinter(linter)
        }
      })
      toggleView.show()
      this.subscriptions.add(toggleView)
    })

    const projectPathChangeCallbackID = window.requestIdleCallback(
      /* projectPathChange */ () => {
        this.idleCallbacks.delete(projectPathChangeCallbackID)
        // NOTE: Atom triggers this on boot so wait a while
        this.subscriptions.add(
          atom.project.onDidChangePaths(() => {
            this.commands.lint()
          }),
        )
      },
    )
    this.idleCallbacks.add(projectPathChangeCallbackID)

    const registryEditorsInitCallbackID = window.requestIdleCallback(
      /* registryEditorsIdleInit */ () => {
        this.idleCallbacks.delete(registryEditorsInitCallbackID)
        // This will be called on the fly if needed, but needs to run on it's
        // own at some point or linting on open or on change will never trigger
        this.registryEditorsInit()
      },
    )
    this.idleCallbacks.add(registryEditorsInitCallbackID)
  }
  dispose() {
    this.idleCallbacks.forEach(callbackID => window.cancelIdleCallback(callbackID))
    this.idleCallbacks.clear()
    this.subscriptions.dispose()
  }

  registryEditorsInit() {
    if (this.registryEditors !== undefined) {
      return
    }
    this.registryEditors = new EditorsRegistry()
    this.subscriptions.add(this.registryEditors)
    this.registryEditors.observe(editorLinter => {
      editorLinter.onShouldLint(onChange => {
        this.registryLintersInit()
        // this.registryLinters becomes valid inside registryLintersInit
        this.registryLinters!.lint({ onChange, editor: editorLinter.getEditor() })
      })
      editorLinter.onDidDestroy(() => {
        this.registryMessagesInit()
        if (!this.registryEditors!.hasSibling(editorLinter)) {
          // this.registryMessages becomes valid inside registryMessagesInit
          this.registryMessages!.deleteByBuffer(editorLinter.getEditor().getBuffer())
        }
      })
    })
    this.registryEditors.activate()
  }
  registryLintersInit() {
    if (this.registryLinters !== undefined) {
      return
    }
    this.registryLinters = new LinterRegistry()
    this.subscriptions.add(this.registryLinters)
    this.registryLinters.onDidUpdateMessages(({ linter, messages, buffer }) => {
      this.registryMessagesInit()
      // this.registryMessages becomes valid inside registryMessagesInit
      this.registryMessages!.set({ linter, messages, buffer })
    })
    this.registryLinters.onDidBeginLinting(({ linter, filePath }) => {
      this.registryUIInit()
      // this.registryUI becomes valid inside registryUIInit
      this.registryUI!.didBeginLinting(linter, filePath)
    })
    this.registryLinters.onDidFinishLinting(({ linter, filePath }) => {
      this.registryUIInit()
      // this.registryUI becomes valid inside registryUIInit
      this.registryUI!.didFinishLinting(linter, filePath)
    })
  }
  registryIndieInit() {
    if (this.registryIndie !== undefined) {
      return
    }
    this.registryIndie = new IndieRegistry()
    this.subscriptions.add(this.registryIndie)
    this.registryIndie.observe(indieLinter => {
      indieLinter.onDidDestroy(() => {
        this.registryMessagesInit()
        // this.registryMessages becomes valid inside registryMessagesInit
        this.registryMessages!.deleteByLinter(indieLinter)
      })
    })
    this.registryIndie.onDidUpdate(({ linter, messages }) => {
      this.registryMessagesInit()
      // this.registryMessages becomes valid inside registryMessagesInit
      this.registryMessages!.set({ linter, messages, buffer: null })
    })
  }
  registryMessagesInit() {
    if (this.registryMessages) {
      return
    }
    this.registryMessages = new MessageRegistry()
    this.subscriptions.add(this.registryMessages)
    this.registryMessages.onDidUpdateMessages(difference => {
      this.registryUIInit()
      // this.registryUI becomes valid inside registryUIInit
      this.registryUI!.render(difference)
    })
  }
  registryUIInit() {
    if (this.registryUI !== undefined) {
      return
    }
    this.registryUI = new UIRegistry()
    this.subscriptions.add(this.registryUI)
  }

  // API methods for providing/consuming services
  // UI
  addUI(ui: UI) {
    this.registryUIInit()
    // this.registryUI becomes valid inside registryUIInit
    this.registryUI!.add(ui)
    this.registryMessagesInit()
    // this.registryMessages becomes valid inside registryMessagesInit
    const messages = this.registryMessages!.messages
    if (messages.length) {
      ui.render({ added: messages, messages, removed: [] })
    }
  }
  deleteUI(ui: UI) {
    this.registryUIInit()
    // this.registryUI becomes valid inside registryUIInit
    this.registryUI!.delete(ui)
  }
  // Standard Linter
  addLinter(linter: LinterProvider) {
    this.registryLintersInit()
    // this.registryLinters becomes valid inside registryLintersInit
    this.registryLinters!.addLinter(linter)
  }
  deleteLinter(linter: LinterProvider) {
    this.registryLintersInit()
    // this.registryLinters becomes valid inside registryLintersInit
    this.registryLinters!.deleteLinter(linter)
    this.registryMessagesInit()
    // this.registryMessages becomes valid inside registryMessagesInit
    this.registryMessages!.deleteByLinter(linter)
  }
  // Indie Linter
  addIndie(indie: Indie) {
    this.registryIndieInit()
    // this.registryIndie becomes valid inside registryIndieInit
    return this.registryIndie!.register(indie, 2)
  }
}

export default Linter
