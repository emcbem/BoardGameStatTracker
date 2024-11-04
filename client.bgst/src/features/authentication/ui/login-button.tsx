import { useAuth } from "react-oidc-context";

export default function LoginLogoutButton() {
  const auth = useAuth();

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
        className="underline text-zinc-300 hover:bg-zinc-700 hover:text-zinc-50 px-3 py-2 rounded-md text-sm font-medium"
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
      className="text-zinc-300 hover:bg-zinc-700 hover:text-zinc-50 px-3 py-2 rounded-md text-sm font-medium"
      onClick={() => void auth.signinRedirect()}
    >
      Log in
    </button>
  );
}
