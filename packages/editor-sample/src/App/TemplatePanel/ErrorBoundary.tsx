class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    console.error('🔴 CHILD: Error boundary caught error:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('🔴 CHILD: Error boundary error info:', errorInfo);
  }

  render() {
    if ((this.state as any).hasError) {
      return (
        <div style={{ padding: '20px', background: '#ffebee', color: '#c62828' }}>
          <h2>Child Iframe Error</h2>
          <p>Something went wrong in the email builder.</p>
          <pre>{String((this.state as any).error)}</pre>
        </div>
      );
    }

    return (this.props as any).children;
  }
}
