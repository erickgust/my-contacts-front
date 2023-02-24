import { useCallback } from 'react'
import { useIsMounted } from './use-mounted'

export function useSafeAsyncAction () {
  const isMounted = useIsMounted()

  const safeAsyncAction = useCallback((callbackFn: () => void) => {
    if (isMounted()) {
      callbackFn()
    }
  }, [isMounted])

  return safeAsyncAction
}
