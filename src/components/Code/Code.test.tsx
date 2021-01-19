/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { render, screen } from '@testing-library/react'
import React from 'react'

import Code from './Code'

const testCases = [
  {
    case: '',
    result: '',
  },
]
testCases.forEach(testCase =>
  test('render a string', () => {
    const { container: test0 } = render(
      <Code lang='css'>
        {`@main-color: red;
.foo {
  /** red background **/
  background: @main-color;
}`}
      </Code>
    )
    expect(screen.getAllByText('background')).toBeDefined()
  })
)
testCases.forEach(testCase =>
  test('render a ReactNode', () => {
    const { container: test0 } = render(
      <Code lang='html'>
        <p>Hello</p>
      </Code>
    )
    expect(screen.getAllByText('Hello')).toBeDefined()
  })
)
testCases.forEach(testCase =>
  test('render a ReactNode with children', () => {
    const { container: test0 } = render(
      <Code lang='tsx'>
        <p>
          <p className='hello'>Hello</p>
        </p>
      </Code>
    )
    expect(screen.getAllByText('Hello')).toBeDefined()
  })
)
