/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import type { ReactNode } from 'react'

type WrapProps = {
  children?: ReactNode
  render?: CallableFunction
}
const Wrap = ({ children, render }: WrapProps): JSX.Element | null => {
  const validRender =
    render ||
    ((myChildren: ReactNode) => {
      return myChildren
    })

  return validRender(children)
}

export default Wrap
