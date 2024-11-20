import { createContext } from "react";
import { User } from "../types/user";

interface UserAccountContextInterface {
    user: User | undefined;
    error: string | undefined;
    isLoading: boolean;
    id_token: string | undefined
  }

export const UserContext = createContext<UserAccountContextInterface>({} as UserAccountContextInterface);
