import { useContext } from "react"
import { UserContext } from "../context/UserContextInstance"

export const useUserContext = () => {
    const userContext = useContext(UserContext)
  return userContext
}
