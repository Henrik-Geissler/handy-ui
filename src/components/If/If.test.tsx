/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { shallow } from 'enzyme'
import React from 'react'

import If from './If'

test('shows nothing if is=false', () => {
  const test = shallow(
    <If is={false}>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(test.isEmptyRender()).toBe(true)
})
test('shows nothing if is=undefined', () => {
  const test = shallow(
    <If>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(test.isEmptyRender()).toBe(true)
  const test2 = shallow(
    <If is={undefined}>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(test2.isEmptyRender()).toBe(true)
})
test('shows nothing if no children', () => {
  const test = shallow(<If is />)
  expect(test.isEmptyRender()).toBe(true)
  const test2 = shallow(<If is>{undefined}</If>)
  expect(test2.isEmptyRender()).toBe(true)
})
test('shows nothing if children suggests empty', () => {
  const test = shallow(<If is>{null}</If>)
  expect(test.isEmptyRender()).toBe(true)
  const test2 = shallow(<If is>{[]}</If>)
  expect(test2.isEmptyRender()).toBe(true)
  const test3 = shallow(<If is>{false}</If>)
  expect(test3.isEmptyRender()).toBe(true)
})
test('shows 1 child if is=true', () => {
  const test = shallow(
    <If is>
      <p className='inside'>Hello</p>
    </If>
  )
  expect(test.find('.inside')).toHaveLength(1)
})
test('shows multiple children if is=true', () => {
  const test = shallow(
    <If is>
      <p className='inside'>Hello1</p>
      <p className='inside'>Hello2</p>
      <p className='inside'>Hello3</p>
    </If>
  )
  expect(test.find('.inside')).toHaveLength(3)
})
test('shows valid React Elements if is=true', () => {
  const test = shallow(<If is>Hello</If>)
  expect(test.text()).toEqual('Hello')
  const test2 = shallow(<If is>{['Hello']}</If>)
  expect(test2.text()).toEqual('Hello')
  const test3 = shallow(<If is>{{ hello: 'world' }}</If>)
  expect(test3.text()).toEqual('')
})
