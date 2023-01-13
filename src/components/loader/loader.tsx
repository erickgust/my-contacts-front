import { createPortal } from 'react-dom'
import { Overlay } from './loader-styles'

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
      <div className='loader' />
    </Overlay>
  ), loaderContainer)
}
