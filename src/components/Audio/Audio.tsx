/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React from 'react'

type AudioProps = {
  src: string
}
const Audio = ({ src }: AudioProps): JSX.Element | null => {
  return (
    <audio autoPlay controls>
      <source src={`${src}.ogg`} type='audio/ogg' />
      <source src={`${src}.mp3`} type='audio/mpeg' />
      <track kind='captions' label='English' src={`${src}.vtt`} srcLang='en' />
      Your browser does not support the audio element.
    </audio>
  )
}

export default Audio
