/**
 * Copyright (c) 2021, Henrik Geißler
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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(undefined)
  const [payload, setPayload] = useState([])
  useEffect(() => {
    fetch(src)
      .then(response => response.json())
      .then(
        result => {
          setLoading(false)
          setPayload(result)
        },
        error => {
          setLoading(false)
          setError(error)
        }
      )

    return () => {}
  }, [src])

  return (
    <Resource
      error={error}
      loading={loading}
      loadingIndicator={loadingIndicator}
      payload={payload}
      render={render}
    />
  )
}

export default ResourceContainer
