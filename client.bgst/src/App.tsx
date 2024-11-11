import "./App.css";
import { CustomAuthProvider } from "./features/authentication/services/auth-provider";
import { Pages } from "./features/router/ui/Pages";
import Navbar from "./features/navbar/ui/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CustomAuthProvider>
          <Navbar />
          <br/>
          <div className="mx-auto px-4 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <Pages />
          </div>
        </CustomAuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
