/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React, { createElement, ReactNode } from 'react'

import Error from '../Error/Error'
import ResourceContext from './ResourceContext'

type ErrorProps = {
  code: number
  message: string
}
type ResourceProps = {
  error?: ErrorProps
  loading?: boolean
  loadingIndicator?: ReactNode
  payload: Record<string, any>
  render: CallableFunction
}
const Resource = ({
  error,
  loading,
  loadingIndicator,
  payload,
  render,
}: ResourceProps): JSX.Element | null => {
  if (error) {
    return <Error message={error.message} />
  }
  if (loading) {
    return (loadingIndicator as JSX.Element) || createElement('Loading...')
  }

  return (
    <ResourceContext.Provider value={payload}>
      {render(payload)}
    </ResourceContext.Provider>
  )
}

export default Resource
