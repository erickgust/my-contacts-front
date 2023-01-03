import { createPortal } from 'react-dom'
import { Overlay } from './loader-styles'

export function Loader () {
  const loaderContainer = document.querySelector('[data-js="loader-root"]')

  if (loaderContainer === null) {
    return null
  }

  return createPortal(<Overlay>
    <div className='loader' />
  </Overlay>, loaderContainer)
}
