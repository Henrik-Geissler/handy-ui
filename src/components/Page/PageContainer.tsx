/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React, { ReactNode } from 'react'

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
