import * as React from "react";
import { CircleAlert } from "lucide-react";
import Helper from "@/helper";
import { cn } from "@/lib/utils";

const { isLive } = Helper;

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={cn("w-full max-w-5xl h-96 bg-red-100 text-red-500 font-semibold text-2xl flex flex-col items-center justify-center m-auto my-16 rounded", this.props.className)}>
          <div className="flex items-center space-x-2 mb-3">
            <CircleAlert className="lg:w-6 lg:h-6" />
            <label className="text-xl font-bold block text-red-500">
              An error occured:
            </label>
          </div>
          <h3 className="text-lg font-normal">
            {!isLive
              ? this.state.error.message
              : "An error occured, please reload page"}
          </h3>
        </div>
      );
    }

    return this.props.children;
  }
}
