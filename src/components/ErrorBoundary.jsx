import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: "20px", 
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h1>Something went wrong</h1>
          <p>Please refresh the page or contact support if the problem persists.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              cursor: "pointer"
            }}
          >
            Reload Page
          </button>
          {process.env.NODE_ENV === "development" && (
            <details style={{ marginTop: "20px", textAlign: "left" }}>
              <summary>Error Details</summary>
              <pre style={{ 
                background: "#f5f5f5", 
                padding: "10px", 
                overflow: "auto",
                maxWidth: "800px"
              }}>
                {this.state.error?.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

