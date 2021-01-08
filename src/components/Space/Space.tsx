/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React from 'react'

type SpaceProps = {
  height: string
  width: string
}
const Space = ({ height, width }: SpaceProps): JSX.Element | null => {
  return (
    <div
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        height: `${height}`,
        marginBottom: '0px',
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
