import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FriendsKeys } from "./friend-query-keys";
import { FriendService } from "../services/friend-service";

export const FriendQueries = {
  useGetUserFriend: (token: string | undefined, userId: number) => {
    return useQuery({
      queryKey: FriendsKeys.FromUser(userId),
      queryFn: () => FriendService.getUserFriend(token!),
      enabled: !!token,
    });
  },
  useAddFriendRequest: (userId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ({
        idToken,
        friendCode,
      }: {
        idToken: string;
        friendCode: string;
      }) => FriendService.sendFriendRequest(idToken, friendCode),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: FriendsKeys.FromUser(userId),
        });
      },
    });
  },
};
