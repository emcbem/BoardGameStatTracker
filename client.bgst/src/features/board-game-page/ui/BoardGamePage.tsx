import { useAuth } from "react-oidc-context";
import { callAuthEndpoint, callPublicEndpoint } from "../../authentication/services/user-service"
import { useEffect } from "react";

export const BoardGamePage = () => {
  const auth = useAuth();
  useEffect(() => {
    if(auth.user?.id_token)
    {
      callAuthEndpoint(auth.user?.id_token );
    }
    callPublicEndpoint();
  }, [auth.user?.id_token])

  return (
    <div>BoardGamePage</div>

  )
}
