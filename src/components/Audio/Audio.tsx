/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React from 'react'

type AudioProps = {
  controls?: boolean
  play?: boolean
  ref?: string
  src: string
}
const Audio = ({
  controls,
  play,
  ref,
  src,
}: AudioProps): JSX.Element | null => {
  const validControls = controls || (!ref && !play)

  return (
    <audio autoPlay={play} controls={validControls}>
      <source src={`${src}.ogg`} type='audio/ogg' />
      <source src={`${src}.mp3`} type='audio/mpeg' />
      <track kind='captions' label='English' src={`${src}.vtt`} srcLang='en' />
      Your browser does not support the audio element.
    </audio>
  )
}

export default Audio
