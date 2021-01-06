/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React, { FC, useEffect } from 'react'

interface ErrorProps {
  code?: number
  message?: string
  name?: string
}
const Error: FC<ErrorProps> = ({ code, message, name }) => {
  useEffect(() => {
    throw {
      code: code || 0,
      error: name || 'Exception from ErrorComponent',
      errorInfo: message || 'No further Information',
    }
  }, [])

  return null
}

export default Error
