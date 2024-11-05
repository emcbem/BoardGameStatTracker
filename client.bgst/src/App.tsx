import "./App.css";
import LoginButton from "./features/authentication/ui/login-button";
import { CustomAuthProvider } from "./features/authentication/services/auth-provider";

function App() {

  return (
    <>
      <CustomAuthProvider>
        <LoginButton></LoginButton>
      </CustomAuthProvider>
    </>
  );
}

export default App;
