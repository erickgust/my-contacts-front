import { useEffect, useRef, useState } from 'react'

export function useAnimatedUnmount (isVisible: boolean) {
  const [shouldRender, setShouldRender] = useState(isVisible)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleAnimationEnd () {
      setShouldRender(false)
    }

    const element = elementRef.current

    if (isVisible) {
      setShouldRender(true)
    } else {
      element?.addEventListener('animationend', handleAnimationEnd)
    }

    return () => {
      element?.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [isVisible])

  return { shouldRender, elementRef }
}
