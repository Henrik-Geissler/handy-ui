/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React, { FC, ReactNode } from 'react'

import { Page } from '../../main'

interface PageContainerProps {
  children?: ReactNode
}
const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return <Page>{children}</Page>
}

export default PageContainer
