/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { useSnackbar } from 'notistack'
import React, { FC, useEffect } from 'react'

interface ToastProps {
  message: string
  variant: string
}
const Toast: FC<ToastProps> = ({ message, variant }) => {
  const { enqueueSnackbar } = useSnackbar()
  useEffect(() => {
    enqueueSnackbar(message)
  }, [])

  return null
}

export default Toast
