import  { Component, ErrorInfo } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../../types/type";



export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("Logging error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
              <img
                className="w-full h-full "
                src="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"
                alt="error image"
              />
            </div>
        )
    }

    return this.props.children;
  }
}
