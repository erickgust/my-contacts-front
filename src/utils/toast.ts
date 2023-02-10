import { ToastData } from '@/components/toast/toast-types'
import EventManager from '@/lib/event-manager'

export const toastEventManager = new EventManager()

export function toast (data: ToastData) {
  toastEventManager.notify('addtoast', data)
}
