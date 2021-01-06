import Component from 'react'
import If from '../If/If';
import Toast from '../Toast/Toast';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false};
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('ERROR: '+error+'->'+errorInfo)
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    return <><If is={this.state.hasError}><Toast variant='error' message=''/></If> {this.props.children} </>
  }
}

export default ErrorBoundary