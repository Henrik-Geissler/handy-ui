/**
 * Copyright (c) 2021, Henrik Geißler
 */
import React, { createElement, FC, ReactElement, ReactNode } from 'react'

import ResourceContext from './ResourceContext'

interface ErrorProps {
  code: number
  message: string
}
interface ResourceProps {
  error?: ErrorProps
  loading: boolean
  loadingIndicator?: ReactNode
  payload: any
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
    return createElement(`Error: ${error.message}`) as ReactElement
  }
  if (loading) {
    return (loadingIndicator || createElement('Loading...')) as ReactElement
  }

  return (
    <ResourceContext.Provider value={payload}>
      {render(payload)}
    </ResourceContext.Provider>
  )
}

export default Resource
