export default class EventManager {
  private listeners: Map<string, Function[]>

  constructor () {
    this.listeners = new Map()
  }

  on (event: string, listener: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, [])
    }

    this.listeners.get(event)!.push(listener)
  }

  notify (event: string, data: unknown) {
    if (!this.listeners.has(event)) {
      return
    }

    this.listeners.get(event)!.forEach((listener) => {
      listener(data)
    })
  }

  off (event: string, listenerToRemove: Function) {
    if (!this.listeners.has(event)) {
      return
    }

    const filteredListeners = this.listeners.get(event)!.filter(
      (listener) => listener !== listenerToRemove,
    )

    this.listeners.set(event, filteredListeners)
  }
}
