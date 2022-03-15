import React from "react";
import ReactDOM from "react-dom";

import Counter from "remote/Counter";

import "./index.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div style={{ fontSize: "1rem", color: "red" }}>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

const App = () => (
  <div className="container">
    <div style={{ marginBottom: "8px" }}>Name: host</div>
    <ErrorBoundary>
      <Counter name="Host" />
    </ErrorBoundary>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
