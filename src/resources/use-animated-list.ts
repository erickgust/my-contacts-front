import { useCallback, useState } from 'react'

export function useAnimatedList<T extends { id: number }> (initialItems: T[] = []) {
  const [items, setItems] = useState<T[]>(initialItems)
  const [pendingCloseIds, setPendingCloseIds] = useState<number[]>([])

  const handleRemoveItem = useCallback((id: number) => {
    setPendingCloseIds((prevIds) => [...prevIds, id])
  }, [])

  const handleAnimationEnd = useCallback((id: number) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id))
    setPendingCloseIds((prevIds) => prevIds.filter(prevId => prevId !== id))
  }, [])

  return {
    items,
    pendingCloseIds,
    handleRemoveItem,
    handleAnimationEnd,
    setItems,
  }
}
