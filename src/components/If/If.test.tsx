/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { shallow } from 'enzyme'
import React from 'react'

import If from './If'

test('<If> shows nothing on is=false', () => {
  const test = shallow(
    <If is={false}>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(test.find('.inside')).toHaveLength(0)
  expect(test).toEqual({})
})
test('<If> shows 1 child on is=true', () => {
  const test = shallow(
    <If is>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(test.find('.inside')).toHaveLength(1)
})
test('<If> shows multiple child on is=true', () => {
  const test = shallow(
    <If is>
      <p className='inside'>Hello1</p>
      <p className='inside'>Hello2</p>
      <p className='inside'>Hello3</p>
    </If>
  )
  expect(test.find('.inside')).toHaveLength(3)
})
test('<If> shows nothing if no children', () => {
  const test = shallow(<If is={false} />)
  expect(test).toEqual({})
  const test2 = shallow(<If is />)
  expect(test2).toEqual({})
})
