/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { Typography } from '@material-ui/core'
import type { ReactNode } from 'react'
import React from 'react'

type TextProps = {
  children: ReactNode
}
const Text = ({ children }: TextProps): JSX.Element | null => {
  return (
    <Typography noWrap variant='body1'>
      {children}
    </Typography>
  )
}

export default Text
