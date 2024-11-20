import { useUserContext } from "../../authentication/hooks/useUserContext";
import { FriendQueries } from "../tanstack/friend-queries";
import { FriendRequest } from "../types/friend-request";

export const FriendRequestCard = ({
  friendRequest,
}: {
  friendRequest: FriendRequest;
}) => {
    const user = useUserContext();

    const mutation = FriendQueries.useAcceptFriendRequest(user.user?.id ?? 0)
    const declineMutation = FriendQueries.useDeclineFriendRequest(user.user?.id ?? 0)

  return (
    <div className="bg-swhite-50 max-h-fit rounded-lg shadow-lg transform p-6 flex flex-col items-center">
      <img
        src={friendRequest.user.imageUrl}
        alt={`${friendRequest.user.username}'s profile`}
        className="w-24 h-24 rounded-full shadow-md mb-4"
      />
      <h2 className="text-xl font-semibold text-swhite-950 mb-2">
        {friendRequest.user.username}
      </h2>
      <p className="text-sm text-swhite-500 mb-4">
        Awaiting response...
      </p>
      <div className="flex space-x-3">
        <button onClick={() => mutation.mutate({friendRequestId: friendRequest.id, idToken: user!.id_token!})} className="bg-bgst-600 text-bgst-50 py-2 px-4 rounded-lg shadow-md">
          Accept
        </button>
        <button onClick={() => declineMutation.mutate({friendRequestId: friendRequest.id, idToken: user!.id_token!})} className="bg-red-600 text-red-50 py-2 px-4 rounded-lg shadow-md">
          Decline
        </button>
      </div>
    </div>
  );
};
