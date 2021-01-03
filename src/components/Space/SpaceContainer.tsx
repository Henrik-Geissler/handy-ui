/**
 * Copyright (c) 2021, Henrik Geißler
 */
import React, { FC } from 'react'

import Space from './Space'

interface SpaceContainerProps {
  h?: string | number
  s?: string | number
  w?: string | number
}
const SpaceContainer: FC<SpaceContainerProps> = ({ h, s, w }) => {
  if (s) w = h = s
  const realWidth = typeof w === 'number' ? `${w}` : w || '100%'
  const realHeight = typeof h === 'number' ? `${h}` : h || '100%'

  return <Space height={realHeight} width={realWidth} />
}

export default SpaceContainer
