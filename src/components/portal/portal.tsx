import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  containerName?: string
  children: ReactNode
}

export function Portal ({ containerName = 'root', children }: PortalProps) {
  const containerAlreadyExists = document.querySelector(`[data-portal="${containerName}"]`)
  const childrenNode = <>{children}</>

  if (containerAlreadyExists) {
    return createPortal(childrenNode, containerAlreadyExists)
  }

  const container = document.createElement('div')
  container.setAttribute('data-portal', containerName)
  document.body.appendChild(container)

  return createPortal(childrenNode, container)
}
