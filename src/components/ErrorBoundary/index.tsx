import { Component, ErrorInfo, ReactNode } from 'react';


interface ErrorBoundaryProps {
    children: ReactNode;
  }
  class ErrorBoundary extends Component<ErrorBoundaryProps> {
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error(error, errorInfo);
    }
  
    render() {
      return this.props.children;
    }
  }
  export default ErrorBoundary;