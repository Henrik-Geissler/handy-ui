import React, { ReactNode } from 'react'

interface IfProps {
  is: boolean
  children: ReactNode
}

const If = ({ is, children }: IfProps) => {
  if (!is) return <></>
  return { children }
}

export default If
