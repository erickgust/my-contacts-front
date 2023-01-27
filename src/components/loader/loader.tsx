import { createPortal } from 'react-dom'
import { Overlay } from './loader-styles'
import { Spinner } from '../spinner'

type LoaderProps = {
  isLoading: boolean
}

export function Loader ({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null
  }

  const loaderContainer = document.querySelector('[data-js="loader-root"]')

  if (loaderContainer === null) {
    return null
  }

  return createPortal((
    <Overlay>
      <Spinner size={90} />
    </Overlay>
  ), loaderContainer)
}
