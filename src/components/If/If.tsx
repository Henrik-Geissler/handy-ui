/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { ReactNode } from 'react'

type IfProps = {
  children?: ReactNode
  is?: boolean
}
const If = ({ children, is }: IfProps): JSX.Element | null => {
  if (!is || !children) return null

  return children as JSX.Element
}

export default If
