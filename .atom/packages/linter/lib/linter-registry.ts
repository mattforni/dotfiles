import { Emitter, CompositeDisposable } from 'atom'
import type { TextEditor, Disposable, Notification } from 'atom'

import * as Helpers from './helpers'
import * as Validate from './validate'
import { $version, $activated, $requestLatest, $requestLastReceived } from './helpers'
import type { Linter } from './types'

export default class LinterRegistry {
  private emitter: Emitter = new Emitter()
  private linters: Set<Linter> = new Set()
  private lintOnChange: boolean = true
  private ignoreVCS: boolean = true
  private ignoreGlob: string = '**/*.min.{js,css}'
  private lintPreviewTabs: boolean = true
  private subscriptions: CompositeDisposable = new CompositeDisposable()
  private disabledProviders: Array<string> = []
  private activeNotifications: Set<Notification> = new Set()

  constructor() {
    this.subscriptions.add(
      this.emitter,
      atom.config.observe('linter.lintOnChange', lintOnChange => {
        this.lintOnChange = lintOnChange
      }),
      atom.config.observe('core.excludeVcsIgnoredPaths', ignoreVCS => {
        this.ignoreVCS = ignoreVCS
      }),
      atom.config.observe('linter.ignoreGlob', ignoreGlob => {
        this.ignoreGlob = ignoreGlob
      }),
      atom.config.observe('linter.lintPreviewTabs', lintPreviewTabs => {
        this.lintPreviewTabs = lintPreviewTabs
      }),
      atom.config.observe('linter.disabledProviders', disabledProviders => {
        if (disabledProviders.length !== 0) {
          console.warn(`Linter package: disabled linter providers: ${disabledProviders}`)
        }
        this.disabledProviders = disabledProviders
      }),
    )
  }
  hasLinter(linter: Linter): boolean {
    return this.linters.has(linter)
  }
  addLinter(linter: Linter) {
    if (!Validate.linter(linter)) {
      return
    }
    linter[$activated] = true
    if (typeof linter[$requestLatest] === 'undefined') {
      linter[$requestLatest] = 0
    }
    if (typeof linter[$requestLastReceived] === 'undefined') {
      linter[$requestLastReceived] = 0
    }
    linter[$version] = 2
    this.linters.add(linter)
  }
  getProviders(): Array<Linter> {
    return Array.from(this.linters)
  }
  deleteLinter(linter: Linter) {
    if (!this.linters.has(linter)) {
      return
    }
    linter[$activated] = false
    this.linters.delete(linter)
  }
  async lint({ onChange, editor }: { onChange: boolean; editor: TextEditor }): Promise<boolean> {
    const filePath = editor.getPath()

    if (
      (onChange && !this.lintOnChange) || // Lint-on-change mismatch
      // Ignored by VCS, Glob, or simply not saved anywhere yet
      (!this.lintPreviewTabs && atom.workspace.getActivePane().getPendingItem() === editor) || // Ignore Preview tabs
      (await Helpers.isPathIgnored(editor.getPath(), this.ignoreGlob, this.ignoreVCS))
    ) {
      return false
    }

    const scopes = Helpers.getEditorCursorScopes(editor)

    const promises = []
    for (const linter of this.linters) {
      if (!Helpers.shouldTriggerLinter(linter, onChange, scopes)) {
        continue
      }
      if (this.disabledProviders.includes(linter.name)) {
        continue
      }
      const number = ++linter[$requestLatest]
      const statusBuffer = linter.scope === 'file' ? editor.getBuffer() : null
      const statusFilePath = linter.scope === 'file' ? filePath : null

      this.emitter.emit('did-begin-linting', { number, linter, filePath: statusFilePath })
      promises.push(
        new Promise(function (resolve: (editor: ReturnType<Linter['lint']>) => void) {
          resolve(linter.lint(editor))
        }).then(
          messages => {
            this.emitter.emit('did-finish-linting', { number, linter, filePath: statusFilePath })
            if (linter[$requestLastReceived] >= number || !linter[$activated] || (statusBuffer && !statusBuffer.isAlive())) {
              return
            }
            linter[$requestLastReceived] = number
            if (statusBuffer && !statusBuffer.isAlive()) {
              return
            }

            if (messages === null || messages === undefined) {
              // NOTE: Do NOT update the messages when providers return null
              return
            }

            let validity = true
            // NOTE: We are calling it when results are not an array to show a nice notification
            if (atom.inDevMode() || !Array.isArray(messages)) {
              validity = Validate.messages(linter.name, messages)
            }
            if (!validity) {
              return
            }

            Helpers.normalizeMessages(linter.name, messages)
            this.emitter.emit('did-update-messages', { messages, linter, buffer: statusBuffer })
          },
          error => {
            this.emitter.emit('did-finish-linting', { number, linter, filePath: statusFilePath })

            console.error(`[Linter] Error running ${linter.name}`, error)
            const notificationMessage = `[Linter] Error running ${linter.name}`
            if (Array.from(this.activeNotifications).some(item => item.getOptions().detail === notificationMessage)) {
              // This message is still showing to the user!
              return
            }

            const notification = atom.notifications.addError(notificationMessage, {
              detail: 'See Console for more info.',
              dismissable: true,
              buttons: [
                {
                  text: 'Open Console',
                  onDidClick: () => {
                    atom.openDevTools()
                    notification.dismiss()
                  },
                },
                {
                  text: 'Cancel',
                  onDidClick: () => {
                    notification.dismiss()
                  },
                },
              ],
            })
          },
        ),
      )
    }

    await Promise.all(promises)
    return true
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  onDidUpdateMessages(callback: (...args: Array<any>) => any): Disposable {
    return this.emitter.on('did-update-messages', callback)
  }
  onDidBeginLinting(callback: (...args: Array<any>) => any): Disposable {
    return this.emitter.on('did-begin-linting', callback)
  }
  onDidFinishLinting(callback: (...args: Array<any>) => any): Disposable {
    return this.emitter.on('did-finish-linting', callback)
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */

  dispose() {
    this.activeNotifications.forEach(notification => notification.dismiss())
    this.activeNotifications.clear()
    this.linters.clear()
    this.subscriptions.dispose()
  }
}
