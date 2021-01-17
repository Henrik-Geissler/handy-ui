/**
 * Copyright (c) 2021, Henrik Geißler.
 */

import axios from 'axios'
import type { ReactNode } from 'react'
import React, { useEffect, useState } from 'react'

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
    axios.get(src).then(
      (response: any) => {
        setFetchLoading(false)
        setFetchPayload(response.data)
      },
      (error: any) => {
        setFetchLoading(false)
        setFetchError(error)
      }
    )

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
