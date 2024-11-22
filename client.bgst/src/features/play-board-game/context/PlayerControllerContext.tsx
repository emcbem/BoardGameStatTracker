import { createContext } from "react";
import { AddPlayerTableController } from "../types/AddPlayerTableController";

export const PlayerControllerContext = createContext<AddPlayerTableController>({} as AddPlayerTableController)
