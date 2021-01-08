/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { render, screen } from '@testing-library/react'
import React from 'react'

import If from './If'

test('render nothing if is=false', () => {
  const { container: test0 } = render(
    <If is={false}>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(test0.firstChild).toBeNull()
})
test('render nothing if is=undefined', () => {
  const { container: test0 } = render(
    <If is={undefined}>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(test0.firstChild).toBeNull()
  const { container: test1 } = render(
    <If is={undefined}>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(test1.firstChild).toBeNull()
})
test('render nothing if no children', () => {
  const { container: test0 } = render(<If is />)
  expect(test0.firstChild).toBeNull()
  const { container: test1 } = render(<If is>{undefined}</If>)
  expect(test1.firstChild).toBeNull()
})
test('render nothing if children is null', () => {
  const { container: test0 } = render(<If is>{null}</If>)
  expect(test0.firstChild).toBeNull()
  const { container: test1 } = render(<If is>{[]}</If>)
  expect(test1.firstChild).toBeNull()
  const { container: test2 } = render(<If is>{false}</If>)
  expect(test2.firstChild).toBeNull()
})
test('render single children if is=true', () => {
  render(
    <If is>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(screen.getByText('Hello')).toBeDefined()
})
test('render string literal if is=true', () => {
  render(<If is>Hello</If>)
  expect(screen.getByText('Hello')).toBeDefined()
})
test('render multiple children if is=true', () => {
  render(
    <If is>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </If>
  )
  expect(screen.queryAllByText('Hello')).toHaveLength(3)
})
test('remove children if is becomes false', () => {
  const { container } = render(<If is>Hello</If>)
  expect(screen.queryByText('Hello')).toBeDefined()
  render(<If>Hello</If>, { container })
  expect(screen.queryByText('Hello')).toBeNull()
})
