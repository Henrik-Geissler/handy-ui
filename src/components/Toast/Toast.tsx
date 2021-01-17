/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'

type ToastProps = {
  message: string
  variant?: 'default' | 'error' | 'info' | 'success' | 'warning'
}
const Toast = ({ message, variant }: ToastProps): null => {
  const { enqueueSnackbar } = useSnackbar()
  useEffect(() => {
    enqueueSnackbar(message, { variant: variant || 'default' })
  }, [message, variant, enqueueSnackbar])

  return null
}

export default Toast
