/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React, { ReactNode, useEffect, useState } from 'react'

import Resource from './Resource'

type ResourceContainerProps = {
  loadingIndicator?: ReactNode
  render: CallableFunction
  src: string
}
const ResourceContainer = ({
  loadingIndicator,
  render,
  src,
}: ResourceContainerProps): JSX.Element | null => {
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
