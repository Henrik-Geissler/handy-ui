/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import UnlockAudio from './UnlockAudio'

test('render nothing', () => {
  const { container: test0 } = render(<UnlockAudio />)
  expect(test0.firstChild).toBeNull()
})
test('play audio on click ', () => {
  const { container: test0 } = render(<UnlockAudio />)
  expect(test0.firstChild).toBeNull()
  fireEvent.click(test0)
})
