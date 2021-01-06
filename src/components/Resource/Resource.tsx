/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React, { createElement, FC, ReactElement, ReactNode } from 'react'

import Error from '../Error/Error'
import ResourceContext from './ResourceContext'

interface ErrorProps {
  code: number
  message: string
}
interface ResourceProps {
  error?: ErrorProps
  loading: boolean
  loadingIndicator?: ReactNode
  payload: Record<string, any>
  render: CallableFunction
}
const Resource: FC<ResourceProps> = ({
  error,
  loading,
  loadingIndicator,
  payload,
  render,
}: ResourceProps) => {
  if (error) {
    return <Error code={error.code} message={error.message} />
  }
  if (loading) {
    return (loadingIndicator as ReactElement) || createElement('Loading...')
  }

  return (
    <ResourceContext.Provider value={payload}>
      {render(payload)}
    </ResourceContext.Provider>
  )
}

export default Resource
