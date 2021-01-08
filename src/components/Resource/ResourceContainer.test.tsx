/**
 * Copyright (c) 2021, Henrik Geißler
 */

import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import React from 'react'

import ResourceContainer from './ResourceContainer'

const server = setupServer(
  rest.post('/api/name', (request, res, context) => {
    return res(context.json({ name: 'Hello' }))
  })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
const testCases = [
  {
    json: { name: 'Hello' },
    render: (data: any) => {
      return data.name
    },
    result: 'Hello',
    src: '/api/name',
  },
]
testCases.forEach(testCase =>
  test(`render ${testCase.result} after loading ${testCase.src}`, async () => {
    server.use(
      rest.get(testCase.src, (request, res, context) => {
        return res(context.json(testCase.json))
      })
    )
    render(
      <ResourceContainer
        loadingIndicator='Loading'
        render={testCase.render}
        src={testCase.src}
      />
    )
    expect(screen.queryByText('Loading')).toBeDefined()
    await waitFor(() => {
      expect(screen.getByText(testCase.result)).toBeDefined()
    })
  })
)
// TODO: handle errors
// return res(ctx.status(500))
