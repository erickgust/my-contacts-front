import { ToastType } from '@/components/toast/toast-types'

type ToastData = {
  message: string;
  type: ToastType
}

export function toast (data: ToastData) {
  const event = new CustomEvent('addtoast', {
    detail: {
      message: data.message,
      type: data.type,
    },
  })

  document.dispatchEvent(event)
}
