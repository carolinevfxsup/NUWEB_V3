import { Component, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error in application:', error, errorInfo);
  }

  private handleReload = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 text-center bg-bg text-text">
          <div className="max-w-md w-full space-y-6">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-red-600 block">
              Application Notice
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight">
              Failed to load module
            </h2>
            <p className="text-sm text-text/70 font-sans leading-relaxed">
              A connection or module update occurred. Please refresh to load the latest application assets.
            </p>
            <button
              onClick={this.handleReload}
              className="bg-black text-white px-8 py-4 font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-600 transition-colors"
            >
              Refresh Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
