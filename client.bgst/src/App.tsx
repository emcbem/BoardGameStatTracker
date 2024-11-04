import "./App.css";
import LoginLogoutButton from "./features/authentication/ui/login-button";
import { CustomAuthProvider } from "./features/authentication/services/auth-provider";

function App() {

  return (
    <>
      <CustomAuthProvider>
        <LoginLogoutButton></LoginLogoutButton>
      </CustomAuthProvider>
    </>
  );
}

export default App;
