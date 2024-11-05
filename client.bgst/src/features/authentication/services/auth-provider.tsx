import { ReactNode } from "react";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "ethan-class-demo",
  redirect_uri: process.env.NODE_ENV == "production" ? "https://bgst.duckdns.org" : "http://localhost:5173/" ,
  onSigninCallback: async (user) => {
    console.log("Signed in callback");
    const newUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newUrl);

    console.log(user?.access_token);
    const expiresDate = new Date(user!.expires_at! * 1000).toUTCString();
    document.cookie = `jwt_token=${user?.access_token}; expires=${expiresDate};`;
  },
  onRemoveUser: () => {
    document.cookie = `jwt_token= ; expires=${new Date(0)};`;
  }
};

export const CustomAuthProvider = ({ children }: { children: ReactNode }) => {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
};
