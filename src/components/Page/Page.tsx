/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { SnackbarProvider } from 'notistack'
import React, { ReactNode } from 'react'

import BodyWrapper from '../BodyWrapper/BodyWrapper'
import Error from '../Error/Error'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundaryClass'
import LazyImage from '../LazyImage/LazyImage'
import If from '../If/If'
import RealHeight from '../RealHeight/RealHeight'
import Style from '../Style/Style'
import Toast from '../Toast/Toast'
import UnlockAudio from '../UnlockAudio/UnlockAudio'

type PageProps = {
  audio?: boolean
  children: ReactNode
  scrollable?: boolean
}
const Page = ({
  audio,
  children,
  scrollable,
}: PageProps): JSX.Element | null => {
  return (
    <SnackbarProvider maxSnack={3}>
      <ErrorBoundary>
        <RealHeight />
        <If is={audio}>
          <UnlockAudio />
        </If>
        <LazyImage />
        <BodyWrapper scrollable={scrollable || true}>
          <If>
            <Error />
          </If>
          {children}
        </BodyWrapper>
        <Toast message='Hello World' />
        <Style src='css/lazy' />
      </ErrorBoundary>
    </SnackbarProvider>
  )
}

export default Page
