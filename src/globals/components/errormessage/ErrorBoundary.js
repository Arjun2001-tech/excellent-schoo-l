import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   console.log(error);
  //   console.log(errorInfo);
  // }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <div>OOPS!! Something Went Wrong!!!!</div>;
    }
    return children;
  }
}

export default ErrorBoundary;
