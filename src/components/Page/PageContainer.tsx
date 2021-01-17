/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import type { ReactNode } from 'react'
import React from 'react'

import { Page } from '../../main'

type PageContainerProps = {
  children?: ReactNode
}
const PageContainer = ({
  children,
}: PageContainerProps): JSX.Element | null => {
  return <Page>{children}</Page>
}

export default PageContainer
