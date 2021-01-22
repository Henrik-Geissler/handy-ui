/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import type { ReactNode } from 'react'
import React from 'react'
import {Typography} from '@material-ui/core'
type TextProps = {
  children: ReactNode
}
const Text = ({ children }: TextProps): JSX.Element | null => {
  return <Typography variant="body1" noWrap>{children}</Typography>
}

export default Text
