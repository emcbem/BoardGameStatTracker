import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FriendsKeys } from "./friend-query-factory";
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
    return useMutation({
      mutationFn: ({
        idToken,
        friendCode,
      }: {
        idToken: string;
        friendCode: string;
      }) => FriendService.sendFriendRequest(idToken, friendCode),
      onSuccess: () => {
        const context = useQueryClient();
        context.invalidateQueries({
          queryKey: FriendsKeys.FromUser(userId),
        });
      },
    });
  },
};
