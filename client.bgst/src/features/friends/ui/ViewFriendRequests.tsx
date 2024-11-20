import { useUserContext } from "../../authentication/hooks/useUserContext";
import { FriendQueries } from "../tanstack/friend-queries";
import { FriendRequestCard } from "./FriendRequestCard";
import { Ghost } from "./Ghost";

export const ViewFriendRequests = () => {
  const user = useUserContext();
  const userFriend = FriendQueries.useGetUserFriend(
    user.id_token,
    user.user?.id ?? 0
  );

  return (
    <>
      <div className="min-h-screen p-8">
        <header className="flex justify-center mb-8">
          <h1 className="text-2xl font-extrabold text-center text-darkness-800">
            Incoming Friend Requests
          </h1>
        </header>

        {(userFriend.data?.friendRequests &&
          userFriend.data.friendRequests.length > 0 && (
            <div className="flex justify-center">
              <div className="rounded-lg flex flex-wrap justify-center gap-8 px-8 bg-darkness-100 py-6">
                {userFriend.data?.friendRequests.map((request, i) => (
                  <FriendRequestCard key={i} friendRequest={request} />
                ))}
              </div>
            </div>
          )) || (
            <div className="flex justify-center">
          <div className="flex justify-center items-center flex-col  bg-swhite-300 rounded-2xl pt-2 pb-4 px-3 w-fit">
              <div className="w-[200px] h-[200px] mb-3">
                <Ghost />
            </div>
            <p className="text-center font-light text-swhite-800 ">
              No incoming friend requests
            </p>
          </div>
                </div>
        )}
      </div>
    </>
  );
};
