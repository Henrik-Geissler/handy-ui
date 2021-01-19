/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React from 'react'

type JpgProps = {
  lazy?: boolean
  ratio?: number
  src: string
}
const Jpg = ({ lazy, ratio, src }: JpgProps): JSX.Element | null => {
  const validLazy = lazy === undefined ? true : lazy

  return (
    <div
      style={{
        border: 0,
        height: `${100 / (ratio || 1)}%`,
        margin: 0,
        padding: 0,
        pointerEvents: 'none',
        width: '100%',
      }}
    >
      <img
        alt={src}
        color='transparent'
        height='100%'
        src={`/img/${src}.jpg.svg`}
        style={{ border: 0, margin: 0, padding: 0, pointerEvents: 'none' }}
        width='100%'
      />
      <img
        alt={src}
        className='js-lazy-image'
        color='transparent'
        data-src={`/img/${src}.jpg`}
        height='100%'
        src={`/img/${src}.jpg.svg`}
        style={{
          border: 0,
          left: 0,
          margin: 0,
          padding: 0,
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
        }}
        width='100%'
      />
    </div>
  )
}

export default Jpg
