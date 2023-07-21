import { RefObject, createRef, useCallback, useEffect, useRef, useState } from 'react'

type RenderItemProps<TRef> = {
  isClosing: boolean
  animatedRef: RefObject<TRef>
}

type RenderItem<T, TRef> = (item: T, props: RenderItemProps<TRef>) => JSX.Element

export function useAnimatedList <
  T extends { id: number },
  TRef extends HTMLElement = HTMLDivElement
> (initialItems: T[] = []) {
  const [items, setItems] = useState<T[]>(initialItems)
  const [pendingCloseIds, setPendingCloseIds] = useState<number[]>([])
  const animatedRefs = useRef<Map<number, RefObject<TRef>>>(new Map())
  const animationEndListeners = useRef<Map<number, Function>>(new Map())

  const handleRemoveItem = useCallback((id: number) => {
    setPendingCloseIds((prevIds) => [...prevIds, id])
  }, [])

  const handleAnimationEnd = useCallback((itemId: number) => {
    const removeListener = animationEndListeners.current.get(itemId)

    if (removeListener) {
      removeListener()
      animationEndListeners.current.delete(itemId)
    }

    animatedRefs.current.delete(itemId)

    setItems((prevItems) => prevItems.filter(item => item.id !== itemId))
    setPendingCloseIds((prevIds) => prevIds.filter(prevId => prevId !== itemId))
  }, [])

  useEffect(() => {
    const currentListeners = animationEndListeners.current

    pendingCloseIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId)
      const hasAnimationEndListener = currentListeners.has(itemId)

      if (!animatedRef?.current || hasAnimationEndListener) return

      const onAnimationEnd = () => handleAnimationEnd(itemId)
      const removeListener = () => {
        animatedRef.current?.removeEventListener('animationend', onAnimationEnd)
      }

      animatedRef.current.addEventListener('animationend', onAnimationEnd)
      currentListeners.set(itemId, removeListener)
    })
  }, [handleAnimationEnd, pendingCloseIds])

  useEffect(() => {
    const removeListeners = animationEndListeners.current

    return () => {
      removeListeners.forEach((removeListener) => removeListener())
    }
  }, [])

  const getAnimatedRef = useCallback((itemId: number) => {
    const hasAnimatedRef = animatedRefs.current.has(itemId)

    if (!hasAnimatedRef) {
      const ref = createRef<TRef>()
      animatedRefs.current.set(itemId, ref)

      return ref
    }

    return animatedRefs.current.get(itemId)!
  }, [])

  const renderList = useCallback((renderItem: RenderItem<T, TRef>) => {
    return items.map((item) => {
      const isClosing = pendingCloseIds.includes(item.id)
      const animatedRef = getAnimatedRef(item.id)

      return renderItem(item, { isClosing, animatedRef })
    })
  }, [getAnimatedRef, items, pendingCloseIds])

  return {
    items,
    handleRemoveItem,
    renderList,
    setItems,
  }
}
