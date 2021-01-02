import React, { FC, ReactNode } from 'react'

interface IfProps {
  is: boolean
  children?: ReactNode[]
}

const IfX: FC<IfProps> = ({ is, children }: IfProps) => {
  if (!is || !children) return <></>
  return <>{children}</>
}

export default IfX
