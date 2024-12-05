import { useState } from "react";
import { useUserContext } from "../../authentication/hooks/useUserContext";
import { TextInput } from "../../shared/ui/TextInput";
import { FriendQueries } from "../tanstack/friend-queries";
import FriendCard from "./FriendCard";
import { Modal } from "../../shared/ui/Modal";
import { useSendFriendRequestModal } from "../hooks/useSendFriendRequestModal";
import { Link } from "react-router-dom";
import { EmptyContent } from "../../shared/ui/EmptyContent";
export const ViewFriends = () => {
  const user = useUserContext();
  const userFriend = FriendQueries.useGetUserFriend(
    user.id_token,
    user.user?.id ?? 0
  );

  const [search, setSearch] = useState<string>("");
console.log(user)
  const friendModalController = useSendFriendRequestModal();
  const friendsDontExist =
    userFriend.data && userFriend.data.friends.length == 0;

  return (
    <div className="mx-auto w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg min-h-screen">
      <div className="min-h-screen p-8">
        <header className="flex items-center mb-8">
          <h1 className="text-4xl font-extrabold text-darkness-800">
            My Friends 
          </h1>
          

          <div className="ml-auto flex flex-row gap-3">
            <div className="flex flex-row items-center relative">
              {userFriend.data?.friendRequests &&
                userFriend.data?.friendRequests.length > 0 && (
                  <div className="w-[13px] h-[13px] rounded-full ring ring-red-100 bg-red-400 absolute top-[-6px] right-[-6px]"></div>
                )}
              <Link
                to="/view-friendRequests"
                className="bg-bgst-50 text-bgst-600 py-2 px-6 text-sm font-medium rounded-md shadow-md transition hover:bg-bgst-100 box-border"
              >
                Incoming Requests
              </Link>
            </div>

            <button
              onClick={() => friendModalController.setOpen((x) => !x)}
              className="bg-bgst-600 text-bgst-50 py-2 px-6 text-sm font-medium rounded-md shadow-md transition hover:bg-bgst-700 box-border appearance-none focus:outline-none"
            >
              + Add Friend
            </button>
          </div>
        </header>

        {!friendsDontExist && (
          <div className="mb-8 bg-swhite-50 rounded-md">
            <TextInput
              className="rounded-md focus:ring-bgst-300 focus:outline-bgst-300 focus:outline-offset-3 border-none"
              input={search}
              setInput={(input: string) => setSearch(input)}
              placeholder={"Search through all of your friends..."}
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {userFriend.data?.friends
            .filter((x) =>
              x.user.username.toLowerCase().includes(search.toLowerCase())
            )
            .map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
        </div>

        {friendsDontExist && (
          <>
            <EmptyContent content="No Friends :(" />
          </>
        )}

        <Modal controller={friendModalController} />
      </div>
    </div>
  );
};
