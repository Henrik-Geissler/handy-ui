/**
 * Copyright (c) 2021, Henrik Geißler.
 */
import React, { Component } from 'react'

import If from '../If/If'
import Toast from '../Toast/Toast'

class ErrorBoundary extends Component {
  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(`ERROR: ${error}->${errorInfo}`)
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    return (
      <>
        <If is={false /** This.state.hasError**/}>
          <Toast message='' variant='error' />
        </If>
        {this.props.children}
      </>
    )
  }
}

export default ErrorBoundary
