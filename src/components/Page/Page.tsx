/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import { SnackbarProvider } from 'notistack'
import type { ReactNode } from 'react'
import React from 'react'

import BodyWrapper from '../BodyWrapper/BodyWrapper'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundaryClass'
import If from '../If/If'
import LazyImages from '../LazyImages/LazyImages'
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
        <LazyImages />
        <BodyWrapper scrollable={scrollable || true}>{children}</BodyWrapper>
        <Toast message='Hello World' />
        <Style src='css/lazy' />
      </ErrorBoundary>
    </SnackbarProvider>
  )
}

export default Page
