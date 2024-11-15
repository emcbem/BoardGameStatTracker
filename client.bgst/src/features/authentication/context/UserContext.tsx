import { FC, ReactNode } from "react";
import { useAuth } from "react-oidc-context";
import { useGetUserByIdToken } from "../tan-stack/useGetUserByIdToken";
import { UserContext } from "./UserContextInstance";


export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();

  const { data, isLoading, error } = useGetUserByIdToken(
    user?.id_token ?? ""
  );

  return (
    <UserContext.Provider
      value={{
        user: data,
        error: error?.message,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};