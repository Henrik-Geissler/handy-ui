/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { useEffect } from 'react'

type ErrorProps = {
  message?: string
}
const Error = ({ message }: ErrorProps): null => {
  useEffect(() => {
    throw new TypeError(message || 'ErrorComponent without message')
  }, [message])

  return null
}

export default Error
