/**
 * Copyright (c) 2021, Henrik Geißler
 */
import React, { FC } from 'react'

import SpaceView from './SpaceView'

interface SpaceProps {
  h?: string | number
  s?: string | number
  w?: string | number
}
const Space: FC<SpaceProps> = ({ h, s, w }) => {
  if (s) w = h = s
  const realWidth = typeof w === 'number' ? `${w}` : w || '100%'
  const realHeight = typeof h === 'number' ? `${h}` : h || '100%'

  return <SpaceView height={realHeight} width={realWidth} />
}

export default Space
