import { Component, type ReactNode } from "react";
import { track } from "../analytics";
import { site } from "../data";
import { external, primaryButton, secondaryButton } from "./styles";

type ErrorBoundaryProps = { children: ReactNode };
type ErrorBoundaryState = { hasError: boolean };

// Shows a minimal fallback instead of a blank page if rendering throws.
// React itself logs the caught error to the console.
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">{site.name}</h1>
        <p className="mt-3 max-w-xl leading-relaxed text-zinc-600">
          Something went wrong while loading this page. Reloading usually fixes it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={() => window.location.reload()} className={primaryButton}>
            Reload page
          </button>
          <a
            href={site.resumeUrl}
            {...external}
            onClick={() => track("resume-click", { location: "error-page" })}
            className={secondaryButton}
          >
            Resume
          </a>
          <a
            href={site.githubUrl}
            {...external}
            onClick={() => track("github-click", { location: "error-page" })}
            className={secondaryButton}
          >
            GitHub
          </a>
        </div>
      </main>
    );
  }
}
