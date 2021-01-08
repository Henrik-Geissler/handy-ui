/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { render, screen } from '@testing-library/react'
import React from 'react'

import Error from './Error'

test('throw a TypeError', () => {
  const test0 = () => render(<Error />)
  expect(test0).toThrow(TypeError)
})
test('throw a message', () => {
  let exception = null
  try {
    render(<Error message='Hello' />)
  } catch (error) {
    exception = error
  }
  expect(exception.message).toBe('Hello')
})
