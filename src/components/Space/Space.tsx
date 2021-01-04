/**
 * Copyright (c) 2021, Henrik Geißler
 */
import React, { FC } from 'react'

interface SpaceProps {
  height: string
  width: string
}

const Space: FC<SpaceProps> = ({ height, width }) => {
  return (
    <div
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        height: `${height}`,marginBottom: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        marginTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingTop: '0px',
        pointerEvents: 'none',
        width: `${width}`,
      }}
    />
  )
}

export default Space
