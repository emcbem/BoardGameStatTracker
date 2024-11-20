import { useUserContext } from "../../authentication/hooks/useUserContext"
import { FriendQueries } from "../tanstack/friend-queries";
import { Friend } from "../types/friend";
export const ViewFriends = () => {
  const user = useUserContext();
  const userFriend = FriendQueries.useGetUserFriend(user.id_token, user.user?.id ?? 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">My Friends</h1>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          + Add Friend
        </button>
      </header>

      {/* Search/Filter */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for a friend..."
          className="w-full p-4 rounded-full shadow-sm border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
        />
      </div>

      {/* Friends List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userFriend.data?.friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

const FriendCard = ({ friend }: {friend: Friend}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200 p-6 flex flex-col items-center">
      <img
        src={friend.user.imageUrl}
        alt={`${friend.user.username}'s profile`}
        className="w-24 h-24 rounded-full shadow-md mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-700 mb-2">{friend.user.username}</h2>
      <p className="text-sm text-gray-500 mb-4">Friend since 2023</p> {/* Sample detail */}
      <div className="flex space-x-3">
        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-4 rounded-full shadow-md transition hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-red-300">
          Remove
        </button>
      </div>
    </div>
  );
};
