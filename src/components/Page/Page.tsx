/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { SnackbarProvider } from 'notistack'
import React, { FC } from 'react'

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import FullHeight from '../FullHeight/FullHeight'

interface PageProps {}
const Page: FC<PageProps> = ({}) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <ErrorBoundary>
        <FullHeight />
      </ErrorBoundary>
    </SnackbarProvider>
  )
}

export default Page
