import { useQuery } from '@tanstack/react-query'
import { UserKeys } from './UserKeys'
import { getUserByIdToken } from '../services/user-service'

export const useGetUserByIdToken = (token: string) => {
  return  useQuery({
        queryKey: UserKeys.User(token),
        queryFn: () => getUserByIdToken(token)
    }
  )
}
