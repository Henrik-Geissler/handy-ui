/**
 * Copyright (c) 2021, Henrik Geißler
 */
import React, { FC } from 'react'

import ResourceContext from './ResourceContext'

interface ErrorProps {
  code: number
  message: string
}
interface ResourceProps {
  error?: ErrorProps
  loading: boolean
  payload: any
  render: CallableFunction
}
const Resource: FC<ResourceProps> = ({ error, loading, payload, render }) => {
  if (error) {
    return <>Error: {error.message}</>
  }
  if (loading) {
    return <>Loading...</>
  }

  return (
    <ResourceContext.Provider value={payload}>
      {render(payload)}
    </ResourceContext.Provider>
  )
}

export default Resource
