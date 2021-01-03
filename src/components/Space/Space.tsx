import React from 'react'
import SpaceView from './SpaceView'

interface SpaceProps {
  w?: string | number
  h?: string | number
  s?: string | number
}

const Space: React.FC<SpaceProps> = ({ w, h, s }) => {
  if (s) w = h = s
  let realWidth = typeof w == 'number' ? `${w}` : w || '100%'
  let realHeight = typeof h == 'number' ? `${h}` : h || '100%'

  return <SpaceView width={realWidth} height={realHeight} />
}

export default Space
