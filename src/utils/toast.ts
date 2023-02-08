import { ToastType } from '@/components/toast/toast-types'
import EventManager from '@/lib/event-manager'

export const toastEventManager = new EventManager()

export type ToastData = {
  message: string;
  type: ToastType
}

export function toast (data: ToastData) {
  toastEventManager.notify('addtoast', data)
}
