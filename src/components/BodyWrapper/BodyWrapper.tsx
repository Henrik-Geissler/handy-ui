/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React, { ReactNode } from 'react'

interface BodyWrapperProps {
  children: ReactNode
  scrollable: boolean
}
const BodyWrapper = ({
  children,
  scrollable,
}: BodyWrapperProps): JSX.Element | null => {
  return (
    <div
      style={{
        height: '100vh',
        margin: 0,
        maxHeight: 'calc(var(--vh, 1vh) * 100)',
        overflowX: 'hidden',
        overflowY: scrollable ? 'scroll' : 'hidden',
        padding: 0,
        width: '100vw',
      }}
    >
      {children}
    </div>
  )
}

export default BodyWrapper
