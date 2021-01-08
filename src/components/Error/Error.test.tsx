/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { render } from '@testing-library/react'
import React from 'react'

import Error from './Error'

test('throw a TypeError', () => {
  const test0 = () => render(<Error />)
  expect(test0).toThrow(TypeError)
})
const testCases = [
  {
    case: 'Hello',
    result: 'Hello',
  },
  {
    case: 'false',
    result: 'false',
  },
  {
    case: undefined,
    result: 'ErrorComponent without message',
  },
  {
    case: '',
    result: 'ErrorComponent without message',
  },
  {
    case: ' ',
    result: ' ',
  },
]
testCases.forEach(testCase =>
  test(`throw the message "${testCase.result}" when error is "${testCase.case}"`, () => {
    let exception = null
    try {
      render(<Error message={testCase.case} />)
    } catch (error) {
      exception = error
    }
    expect(exception.message).toBe(testCase.result)
  })
)
