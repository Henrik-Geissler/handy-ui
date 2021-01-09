/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { useEffect } from 'react'

const RealHeight = (): null => {
  useEffect(() => {
    const initialRealHeight = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${initialRealHeight}px`)
    window.addEventListener('resize', () => {
      const realHeight = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${realHeight}px`)
    })
  }, [])

  return null
}

export default RealHeight
