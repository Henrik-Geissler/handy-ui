/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { FC, ReactElement, ReactNode } from 'react'

interface IfProps {
  children?: ReactNode
  is?: boolean
}
const If: FC<IfProps> = ({ children, is }) => {
  if (!is || !children) return null

  return children as ReactElement
}

export default If
