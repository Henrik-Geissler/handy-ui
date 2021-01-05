/**
 * Copyright (c) 2021, Henrik Geißler
 */
import { configure } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

const setupEnzyme = (): void => {
  return configure({ adapter: new EnzymeAdapter() })
}
// eslint-disable-next-line toplevel/no-toplevel-side-effect
setupEnzyme()
