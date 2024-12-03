import { useAuth } from "react-oidc-context";
import { useUserContext } from "../../authentication/hooks/useUserContext";

export const GetStarted = () => {
  const auth = useAuth();
  const user = useUserContext();

  console.log(user)
  return (
    <section id="get-started" className="bg-bgst-500 text-bgst-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl  mb-4">
          Ready to Level Up Your Game Tracking?
        </h3>
        <p className="mb-8">
          Sign up today and start tracking your stats with ease.
        </p>
        <button
          onClick={() => {
            if(!user.user)
            {
              auth.signinRedirect();
            }
          }}
          disabled={!!user.user}
          className="bg-bgst-50 text-bgst-500 px-6 py-3 rounded-lg disabled:bg-bgst-200 disabled:hover:text-bgst-500 hover:bg-bgst-100 hover:text-bgst-600"
        >
          {!user.user && "Sign Up"}
          {user.user && "Signed Up"}
        </button>
      </div>
    </section>
  );
};
