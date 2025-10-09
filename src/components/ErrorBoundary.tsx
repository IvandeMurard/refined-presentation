import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorBoundary]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center p-6">
          <div className="max-w-xl w-full rounded-lg border border-border bg-card p-6 shadow-sm">
            <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
            <p className="text-sm text-muted-foreground mb-4">
              The page crashed. Check the console for details. You can refresh or go back to Home.
            </p>
            <div className="flex gap-2">
              <button
                className="rounded-md px-3 py-2 border border-border bg-background hover:bg-accent/10
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                           focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => (window.location.href = "/")}
              >
                Go Home
              </button>
              <button
                className="rounded-md px-3 py-2 border border-border bg-background hover:bg-accent/10
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                           focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => window.location.reload()}
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
