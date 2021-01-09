/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { render } from '@testing-library/react'
import React from 'react'

import RealHeight from './RealHeight'

test('render nothing', () => {
  const { container: test0 } = render(<RealHeight />)
  expect(test0.firstChild).toBeNull()
})
