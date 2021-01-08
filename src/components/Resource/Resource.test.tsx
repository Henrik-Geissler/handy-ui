/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { render, screen } from '@testing-library/react'
import React from 'react'

import Resource from './Resource'

test('render a JSX Element as loading indicator', () => {
  render(
    <Resource
      error={undefined}
      loading
      loadingIndicator={<p>Hello</p>}
      payload={[]}
      render={() => {}}
    />
  )
  expect(screen.getByText('Hello')).toBeDefined()
})
test('render a string as loading indicator', () => {
  render(
    <Resource
      error={undefined}
      loading
      loadingIndicator='Hello'
      payload={[]}
      render={() => {}}
    />
  )
  expect(screen.getByText('Hello')).toBeDefined()
})
test('throw a Type Error when error is defined', () => {
  const { container } = render(
    <Resource
      error={undefined}
      loading
      loadingIndicator='Hello'
      payload={[]}
      render={() => {}}
    />
  )
  expect(screen.getByText('Hello')).toBeDefined()
  const test0 = () =>
    render(
      <Resource
        error={{ code: 1, message: 'Hello' }}
        loading
        loadingIndicator='Hello'
        payload={[]}
        render={() => {}}
      />,
      { container }
    )
  expect(test0).toThrow(TypeError)
})
test('remove loading indicator when error is defined', () => {
  const { container } = render(
    <Resource
      error={undefined}
      loading
      loadingIndicator='Hello'
      payload={[]}
      render={() => {}}
    />
  )
  expect(screen.getByText('Hello')).toBeDefined()
  try {
    render(
      <Resource
        error={{ code: 1, message: 'Hello' }}
        loading
        loadingIndicator='Hello'
        payload={[]}
        render={() => {}}
      />,
      { container }
    )
  } catch {
    expect(screen.queryByText('Hello')).toBeNull()
  }
})
test('remove loading indicator when loading is false', () => {
  const { container } = render(
    <Resource loading loadingIndicator='Hello' payload={[]} render={() => {}} />
  )
  expect(screen.getByText('Hello')).toBeDefined()
  render(
    <Resource
      loading={false}
      loadingIndicator='Hello'
      payload={[]}
      render={() => {}}
    />,
    { container }
  )
  expect(screen.queryByText('Hello')).toBeNull()
})
test('remove loading indicator when loading is undefined', () => {
  const { container } = render(
    <Resource loading loadingIndicator='Hello' payload={[]} render={() => {}} />
  )
  expect(screen.getByText('Hello')).toBeDefined()
  render(<Resource loadingIndicator='Hello' payload={[]} render={() => {}} />, {
    container,
  })
  expect(screen.queryByText('Hello')).toBeNull()
})
test('render data when loading is undefined', () => {
  const { container } = render(
    <Resource
      loading
      loadingIndicator='Hello'
      payload={['World']}
      render={(string: string) => string[0]}
    />
  )
  expect(screen.getByText('Hello')).toBeDefined()
  expect(screen.queryByText('World')).toBeNull()
  render(
    <Resource
      loadingIndicator='Hello'
      payload={['World']}
      render={(string: string) => string[0]}
    />,
    {
      container,
    }
  )
  expect(screen.queryByText('World')).toBeDefined()
})
