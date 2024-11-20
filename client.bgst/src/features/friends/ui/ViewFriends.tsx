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
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-darkness-800">
          My Friends
        </h1>
        <button onClick={() => modalController.setOpen(x => !x)} className="bg-bgst-600 text-swhite-50 py-2 px-6 rounded-md shadow-md transition hover:bg-bgst-700">
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
