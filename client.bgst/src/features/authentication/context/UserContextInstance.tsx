import { createContext } from "react";
import { User } from "../types/user";

interface UserAccountContextInterface {
    user: User | undefined;
    error: string | undefined;
    isLoading: boolean;
  }

export const UserContext = createContext<UserAccountContextInterface>({} as UserAccountContextInterface);
