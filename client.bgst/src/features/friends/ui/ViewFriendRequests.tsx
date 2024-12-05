import { Link } from "react-router-dom";
import { useUserContext } from "../../authentication/hooks/useUserContext";
import { EmptyContent } from "../../shared/ui/EmptyContent";
import { FriendQueries } from "../tanstack/friend-queries";
import { FriendRequestCard } from "./FriendRequestCard";

export const ViewFriendRequests = () => {
  const user = useUserContext();
  const userFriend = FriendQueries.useGetUserFriend(
    user.id_token,
    user.user?.id ?? 0
  );

  return (
    <>
      <div className="mx-auto w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg min-h-screen">
        <div className="min-h-screen p-8">
          <header className="flex justify-center mb-8">
            <h1 className="text-4xl font-extrabold text-center text-darkness-800">
              Incoming Friend Requests
            </h1>
            <div className="ml-auto">
              <div className="ml-auto flex flex-row gap-3">
                <div className="flex flex-row items-center relative">
                  <Link
                    to="/view-friends"
                    className="bg-bgst-50 text-bgst-600 py-2 px-6 text-sm font-medium rounded-md shadow-md transition hover:bg-bgst-100 box-border"
                  >
                    Friends
                  </Link>
                </div>
              </div>
            </div>
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
            )) || <EmptyContent content="No incoming friend requests" />}
        </div>
      </div>
    </>
  );
};
