import { useCallback, useState } from 'react'

type RenderItem<T> = (item: T, { isClosing } : { isClosing: boolean })
  => JSX.Element

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

  const renderList = useCallback((renderItem: RenderItem<T>) => {
    return items.map((item) => renderItem(item, {
      isClosing: pendingCloseIds.includes(item.id),
    }))
  }, [items, pendingCloseIds])

  return {
    items,
    handleRemoveItem,
    handleAnimationEnd,
    renderList,
    setItems,
  }
}
