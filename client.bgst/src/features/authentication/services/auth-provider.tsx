import { ReactNode } from "react";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "bgst-client-id",
  redirect_uri: process.env.NODE_ENV == "production" ? "https://bgst.duckdns.org/" : "http://localhost:5173/" ,
  onSigninCallback: async () => {
    console.log("we got here")
    const newUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newUrl);
  },
  scope: "openid profile email offline_access",
  automaticSilentRenew: true
};

export const CustomAuthProvider = ({ children }: { children: ReactNode }) => {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
};
