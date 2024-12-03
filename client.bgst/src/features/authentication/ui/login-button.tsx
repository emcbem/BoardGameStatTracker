import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

export default function LoginButton() {
  const auth = useAuth();

  useEffect(() =>
  {
    if(auth.user)
    {
      const date = new Date(auth.user.expires_at ?? 0 * 1000)
      document.cookie = `jwt_token=${auth.user.access_token}; expires=${date.toUTCString()};`
    }
  }, [auth.user])

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div className="text-zinc-50">Signing you in...</div>;
    case "signoutRedirect":
      return <div className="text-zinc-50">Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div className="text-zinc-50">Loading...</div>;
  }

  if (auth.error) {
    return <div className="text-zinc-50">Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <button
        className="text-darkness-200 transition-all hover:bg-darkness-600 hover:text-darkness-50 px-3 py-2 rounded-md text-sm font-medium"
        onClick={() => {
          document.cookie = "jwt_token=;";
          auth.removeUser();
        }}
      >
        Log out
      </button>
    );
  }

  return (
    <button
      className="text-darkness-200 hover:bg-darkness-600 hover:text-darkness-50 px-3 py-2 rounded-md text-sm font-medium"
      onClick={() => void auth.signinRedirect()}
    >
      Log in
    </button>
  );
}
