import "./App.css";
import { CustomAuthProvider } from "./features/authentication/services/auth-provider";
import { Pages } from "./features/router/ui/Pages";
import Navbar from "./features/navbar/ui/Navbar";

function App() {

  return (
    <>
      <CustomAuthProvider>
        <Navbar/>
        <Pages/>
      </CustomAuthProvider>
    </>
  );
}

export default App;
