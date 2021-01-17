/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import type { ErrorInfo, ReactNode } from 'react'
import { Component } from 'react'

type Props = {
  children?: ReactNode
  fallback?: ReactNode
}
type State = {
  hasError: boolean
}
class ErrorBoundary extends Component<Props, State> {
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public state: State = {
    hasError: false,
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    /**
    const { enqueueSnackbar } = useSnackbar()
    enqueueSnackbar(`Uncaught error:${error} ${errorInfo}`, {
      variant: 'error',
    }).
     */
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo)
  }

  public render(): JSX.Element | null {
    const {
      state: { hasError },
    } = this
    const {
      props: { children, fallback },
    } = this
    if (hasError && fallback) {
      return fallback as JSX.Element
    }

    return children as JSX.Element
  }
}

export default ErrorBoundary
