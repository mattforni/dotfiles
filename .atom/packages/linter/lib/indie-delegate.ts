import { Emitter, CompositeDisposable } from 'atom'
import type { Disposable } from 'atom'

import * as Validate from './validate'
import { normalizeMessages, mergeArray } from './helpers'
import type { Indie, Message } from './types'

export default class IndieDelegate {
  private indie: Indie
  scope: 'project' = 'project'
  private emitter: Emitter = new Emitter()
  version: 2
  private messages: Map<string | null | undefined, Array<Message>> = new Map()
  private subscriptions: CompositeDisposable = new CompositeDisposable()

  constructor(indie: Indie, version: 2) {
    this.indie = indie
    this.version = version
    this.subscriptions.add(this.emitter)
  }
  get name(): string {
    return this.indie.name
  }
  getMessages(): Array<Message> {
    const out: Array<Message> = []
    this.messages.forEach(m => {
      mergeArray(out, m)
    })
    return out
  }
  clearMessages(): void {
    if (!this.subscriptions.disposed) {
      this.emitter.emit('did-update', [])
      this.messages.clear()
    }
  }
  setMessages(filePath: string | Array<Record<string, any>>, messages: Array<Message> | null | undefined = null): void {
    // v2 Support from here on
    if (typeof filePath !== 'string' || !Array.isArray(messages)) {
      throw new Error('Invalid Parameters to setMessages()')
    }
    if (this.subscriptions.disposed || !Validate.messages(this.name, messages)) {
      return
    }
    messages.forEach(function (message) {
      if (message.location.file !== filePath) {
        console.debug('[Linter-UI-Default] Expected File', filePath, 'Message', message)
        throw new Error('message.location.file does not match the given filePath')
      }
    })

    normalizeMessages(this.name, messages)
    this.messages.set(filePath, messages)
    this.emitter.emit('did-update', this.getMessages())
  }
  setAllMessages(messages: Array<Message>): void {
    if (this.subscriptions.disposed) {
      return
    }

    if (!Array.isArray(messages) || atom.inDevMode()) {
      if (!Validate.messages(this.name, messages)) {
        return
      }
    }
    normalizeMessages(this.name, messages)

    this.messages.clear()
    for (let i = 0, { length } = messages; i < length; ++i) {
      const message: Message = messages[i]
      const filePath = message.location.file
      let fileMessages = this.messages.get(filePath)
      if (!fileMessages) {
        this.messages.set(filePath, (fileMessages = []))
      }
      fileMessages.push(message)
    }
    this.emitter.emit('did-update', this.getMessages())
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  onDidUpdate(callback: (...args: Array<any>) => any): Disposable {
    return this.emitter.on('did-update', callback)
  }
  onDidDestroy(callback: (...args: Array<any>) => any): Disposable {
    return this.emitter.on('did-destroy', callback)
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */

  dispose(): void {
    this.emitter.emit('did-destroy')
    this.subscriptions.dispose()
    this.messages.clear()
  }
}
