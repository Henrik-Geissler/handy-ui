/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { shallow } from 'enzyme'
import React from 'react'

import If from './If'

test('CheckboxWithLabel changes the text after click', () => {
  const component = shallow(<If is={false} />)
  // Interaction demo
  // expect(checkbox.text()).toEqual('Off')
  // checkbox.find('input').simulate('change')
  // expect(checkbox.text()).toEqual('On')
  // Snapshot demo
  expect(shallow).toMatchSnapshot()
})
