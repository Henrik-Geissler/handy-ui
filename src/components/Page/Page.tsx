/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { SnackbarProvider } from 'notistack'
import React from 'react'

import Error from '../Error/Error'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundaryClass'
import FullHeight from '../FullHeight/FullHeight'
import If from '../If/If'
import Toast from '../Toast/Toast'

type PageProps = {}
const Page = ({}: PageProps): JSX.Element | null => {
  return (
    <SnackbarProvider maxSnack={3}>
      <ErrorBoundary>
        <FullHeight />
        <If>
          <Error />
        </If>
        <Toast message='Hello World' />
      </ErrorBoundary>
    </SnackbarProvider>
  )
}

export default Page
