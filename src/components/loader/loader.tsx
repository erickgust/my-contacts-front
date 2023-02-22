import { Overlay } from './loader-styles'
import { Spinner } from '../spinner'
import { Portal } from '../portal'

type LoaderProps = {
  isLoading: boolean
}

export function Loader ({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null
  }

  return (
    <Portal containerName='loader'>
      <Overlay>
        <Spinner size={90} />
      </Overlay>
    </Portal>
  )
}
