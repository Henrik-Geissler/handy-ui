/**
 * Copyright (c) 2021, Henrik Geißler
 */
import React, { FC, useEffect, useState } from 'react'

import Resource from './Resource'

interface ResourceContainerProps {
  render: CallableFunction
  src: string
}
const ResourceContainer: FC<ResourceContainerProps> = ({ render, src }) => {
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
      payload={payload}
      render={render}
    />
  )
}

export default ResourceContainer
