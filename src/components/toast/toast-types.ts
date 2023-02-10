export type ToastType = 'success' | 'error' | 'default'

export type Toast = {
  message: string
  type?: ToastType
  duration?: number
  id: number
}

export type ToastData = Omit<Toast, 'id'>
