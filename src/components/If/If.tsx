/**
 * Copyright (c) 2021, Henrik Geißler
 */
import React, { FC, ReactNode } from 'react'

interface IfProps {
  children?: ReactNode
  is: boolean
}
const If: FC<IfProps> = ({ children, is }) => {
  if (!is || !children) return <></>

  return <>{children}</>
}

export default If
