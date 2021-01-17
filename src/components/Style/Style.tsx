/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React from 'react'

type StyleProps = {
  src: string
}
const Style = ({ src }: StyleProps): JSX.Element | null => {
  return <link href={`${src}.css`} rel='stylesheet' />
}

export default Style
