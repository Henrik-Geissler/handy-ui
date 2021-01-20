/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import type { ReactNode } from 'react'
import React from 'react'

type TextProps = {
  children: ReactNode
}
const Text = ({ children }: TextProps): JSX.Element | null => {
  return <span>{children}</span>
}

export default Text
