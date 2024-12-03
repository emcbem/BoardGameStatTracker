import { ReactNode } from "react";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
  authority: "https://dev-013fwxix4dwe1jea.us.auth0.com/",
  client_id: "RN5ONZNFTAcXegQh2aPrVuubc65II5lU",
  redirect_uri: process.env.NODE_ENV == "production" ? "https://bgst.duckdns.org/" : "http://localhost:5173/" ,
  onSigninCallback: async () => {
    const newUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newUrl);
  },
  scope: "openid profile email offline_access",
  automaticSilentRenew: true
};

export const CustomAuthProvider = ({ children }: { children: ReactNode }) => {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
};
