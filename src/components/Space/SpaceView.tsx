import React from 'react'

interface SpaceViewProps {
  width: string
  height: string
}

const SpaceView: React.FC<SpaceViewProps> = ({ width, height }) => {
  return (
    <div
      style={{
        width: `${width}`,
        height: `${height}`,
        marginTop: '0px',
        marginBottom: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '0px',
        paddingRight: '0px',
        border: 'none',
        backgroundColor: 'transparent',
        pointerEvents: 'none',
      }}
    ></div>
  )
}

export default SpaceView
