import "./App.css";
import { CustomAuthProvider } from "./features/authentication/services/auth-provider";
import { Pages } from "./features/router/ui/Pages";
import Navbar from "./features/navbar/ui/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const queryClient = new QueryClient();

function App() {
  function fallbackRender({ error }: FallbackProps) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>

        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }

  return (
    <>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <QueryClientProvider client={queryClient}>
          <CustomAuthProvider>
            <Navbar />
            <div className="mx-auto w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg min-h-screen">
              <Pages />
            </div>
            <footer className="bg-darkness-900 text-darkness-50 text-center py-4">
              <p>&copy; 2024 BoardGameStat Tracker. All rights reserved.</p>
            </footer>
            <Toaster position="top-center" gutter={8} />
          </CustomAuthProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
