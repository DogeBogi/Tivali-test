import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null};
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error("Error Boundary caught an error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.errorContainer} >
          <h2 style={styles.title}className='ErrorContainer-title'>Something went wrong!</h2>
          <div style={styles.details} className='ErrorContainer-details'>
          <details >
            {this.state.error && this.state.error.toString()}
            <br/>
          </details>
          </div>
          <button  onClick={()=>{document.location.href="/"}}>
            Try to recover
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
    errorContainer: {
      padding: '1.2rem',
      border: '2px solid #ff4444',
      borderRadius: '4px',
      backgroundColor: '#ffe6e6',
      margin: '0.6rem'
    },
    title: {
      color: '#cc0000',
      margin: '0 0 1rem 0'
    },
    details: {
      whiteSpace: 'pre-wrap',
      marginBottom: '1rem',
      color: '#666'
    },
  };

export default ErrorBoundary