/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React, { FC, ReactNode, useEffect, useState } from 'react'

import Resource from './Resource'

interface ResourceContainerProps {
  loadingIndicator?: ReactNode
  render: CallableFunction
  src: string
}
const ResourceContainer: FC<ResourceContainerProps> = ({
  loadingIndicator,
  render,
  src,
}) => {
  const [fetchLoading, setFetchLoading] = useState(true)
  const [fetchError, setFetchError] = useState(undefined)
  const [fetchPayload, setFetchPayload] = useState([])
  useEffect(() => {
    setFetchLoading(true)
    setFetchError(undefined)
    setFetchPayload([])
    /**
    Fetch(src).
      .then(response => response.json()).
      .then(
        result => {
          setFetchLoading(false).
          setFetchPayload(result).
        },
        error => {
          setFetchLoading(false).
          setFetchError(error).
        }
      ).
     */

    return () => {}
  }, [src])

  return (
    <Resource
      error={fetchError}
      loading={fetchLoading}
      loadingIndicator={loadingIndicator}
      payload={fetchPayload}
      render={render}
    />
  )
}

export default ResourceContainer
