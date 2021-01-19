/**
 * Copyright (c) 2021, Henrik Geißler.
 */

import Prism from 'prismjs'
import type { ReactNode } from 'react'
import React, { useEffect } from 'react'

//and


import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

type CodeProps = {
  children: ReactNode
  lang: string
}
const Code = ({ children, lang }: CodeProps): JSX.Element | null => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <pre
      style={{
        background: '#f9f9fb',
        border: '1px solid #e6e9ec',
        borderRadius: '5px',
        boxShadow:
          'inset 0 0 10px #e3e7ea, inset 0 0 2px #e3e7ea, 0 1px 0 0 #fff',
        margin: '0 0 40px',
        padding: '20px 30px',
        textShadow: ' 0 1px 0 #fff!important',
      }}
    >
      <code className={`language-${lang}`}>{(children as string).trim()}</code>
    </pre>
  )
}

export default Code
