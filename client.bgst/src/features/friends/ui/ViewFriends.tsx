import { useState } from "react";
import { useUserContext } from "../../authentication/hooks/useUserContext";
import { TextInput } from "../../shared/ui/TextInput";
import { FriendQueries } from "../tanstack/friend-queries";
import FriendCard from "./FriendCard";
import { Modal } from "../../shared/ui/Modal";
import { useFriendRequestModal } from "../hooks/useFriendRequestModal";
export const ViewFriends = () => {
  const user = useUserContext();
  const userFriend = FriendQueries.useGetUserFriend(
    user.id_token,
    user.user?.id ?? 0
  );

  const [search, setSearch] = useState<string>("");

  const modalController = useFriendRequestModal();


  return (
    <div className="min-h-screen p-8">
      <header className="flex items-center mb-8">
        <h1 className="text-4xl font-extrabold text-darkness-800">
          My Friends
        </h1>
        <div className="ml-auto relative">
          {userFriend.data?.friendRequests && userFriend.data?.friendRequests?.length > 0 && <div className="w-[13px] h-[13px] rounded-full bg-red-400 absolute top-[-5px] right-[7px]"></div>}
          <button
            onClick={() => modalController.setOpen((x) => !x)}
            className="mr-3 bg-bgst-50 text-bgst-600 py-2 px-6 rounded-md shadow-md transition hover:bg-bgst-100"
          >
            Incoming Requests
          </button>
        </div>

        <button
          onClick={() => modalController.setOpen((x) => !x)}
          className=" bg-bgst-600 text-bgst-50 py-2 px-6 rounded-md shadow-md transition hover:bg-bgst-700"
        >
          + Add Friend
        </button>
      </header>

      <div className="mb-8">
        <TextInput
          input={search}
          setInput={(input: string) => setSearch(input)}
          placeholder={"Search through all of your friends..."}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userFriend.data?.friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>

      <Modal controller={modalController} />
    </div>
  );
};
