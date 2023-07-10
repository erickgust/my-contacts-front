import { Overlay } from './loader-styles'
import { Spinner } from '../spinner'
import { Portal } from '../portal'
import { useAnimationEnd } from '@/resources/useAnimationEnd'

type LoaderProps = {
  isLoading: boolean
}

export function Loader ({ isLoading }: LoaderProps) {
  const { elementRef, shouldRender } = useAnimationEnd(isLoading)

  if (!shouldRender) {
    return null
  }

  return (
    <Portal containerName='loader'>
      <Overlay ref={elementRef} isLeaving={!isLoading}>
        <Spinner size={90} />
      </Overlay>
    </Portal>
  )
}
