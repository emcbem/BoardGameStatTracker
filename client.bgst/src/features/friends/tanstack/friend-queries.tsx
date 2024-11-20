import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FriendsKeys } from "./friend-query-keys";
import { FriendService } from "../services/friend-service";
import toast from "react-hot-toast";

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
        toast.success("Friend request sent")
        queryClient.invalidateQueries({
          queryKey: FriendsKeys.FromUser(userId),
        });
      },
      onError: () => {
        toast.error("Unable to send friend request")
      }
    });
  },
  useAcceptFriendRequest: (userId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({friendRequestId, idToken} :{friendRequestId: number, idToken: string}) => {
            return FriendService.acceptFriendRequest(idToken, friendRequestId)
        },
        onSuccess: () => {
            toast.success("Friend Accepted")
            queryClient.invalidateQueries({
                queryKey: FriendsKeys.FromUser(userId)
            })
        },
        onError: () => {
            toast.error("Unable to accept friend.")
        }
    })
  },
  useDeclineFriendRequest: (userId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({friendRequestId, idToken} : {friendRequestId: number, idToken: string}) => {
            return FriendService.declineFriendRequest(idToken, friendRequestId)
        },
        onSuccess: () => {
            toast.success("Friend Request Declined")
            queryClient.invalidateQueries({
                queryKey: FriendsKeys.FromUser(userId)
            })
        },
        onError: () => {
            toast.error("Unable to decline friend request.")
        }
    })
  }
};
