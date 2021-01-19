/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React from 'react'

import Space from './Space'

type SpaceContainerProps = {
  h?: number | string
  s?: number | string
  w?: number | string
}
const SpaceContainer = ({
  h,
  s,
  w,
}: SpaceContainerProps): JSX.Element | null => {
  if (s) w = h = s
  const realWidth = typeof w === 'number' ? `${w}px` : w ?? '100%'
  const realHeight = typeof h === 'number' ? `${h}px` : h ?? '100%'

  return <Space height={realHeight} width={realWidth} />
}

export default SpaceContainer
