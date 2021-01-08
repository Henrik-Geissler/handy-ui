/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { render, screen } from '@testing-library/react'
import React from 'react'

import If from './If'

const testCases = [
  {
    case: false,
  },
  {
    case: undefined,
  },
]
testCases.forEach(testCase =>
  test(`render nothing when is=${testCase.case}`, () => {
    const { container: test0 } = render(
      <If is={testCase.case}>
        <p className='inside'>Hello</p>
      </If>
    )
    expect(test0.firstChild).toBeNull()
  })
)
test('render nothing when no is', () => {
  const { container: test0 } = render(
    <If>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(test0.firstChild).toBeNull()
})
test('render nothing when self-closing', () => {
  const { container: test0 } = render(<If is />)
  expect(test0.firstChild).toBeNull()
})
const testCases1 = [
  {
    case: undefined,
  },
  {
    case: null,
  },
  {
    case: false,
  },
  {
    case: [],
  },
  {
    case: '',
  },
]
testCases1.forEach(testCase =>
  test(`render nothing when children is ${testCase.case}`, () => {
    const { container: test0 } = render(<If is>{testCase.case}</If>)
    expect(test0.firstChild).toBeNull()
  })
)
const testCases2 = [
  {
    case: 'Hello',
  },
]
testCases2.forEach(testCase =>
  test(`render string literal "${testCase.case}" when is=true`, () => {
    render(<If is>{testCase.case}</If>)
    expect(screen.getByText(testCase.case)).toBeDefined()
  })
)
test('render JSX Element when is=true', () => {
  render(
    <If is>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(screen.getByText('Hello')).toBeDefined()
})
test('render multiple children when is=true', () => {
  render(
    <If is>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </If>
  )
  expect(screen.queryAllByText('Hello')).toHaveLength(3)
})
test('remove children when is becomes false', () => {
  const { container } = render(<If is>Hello</If>)
  expect(screen.queryByText('Hello')).toBeDefined()
  render(<If>Hello</If>, { container })
  expect(screen.queryByText('Hello')).toBeNull()
})
