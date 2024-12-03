import { Friend } from '../types/friend';

const FriendCard = ({ friend }: { friend: Friend }) => {
    return (
      <div className="bg-swhite-50 rounded-lg shadow-lg transform p-6 flex flex-col items-center">
        <img
          src={friend.user.imageUrl}
          alt={`${friend.user.username}'s profile`}
          className="w-24 h-24 rounded-full shadow-md mb-4"
        />
        <h2 className="text-xl font-semibold text-swhite-950 mb-2">
          {friend.user.username}
        </h2>
        <p className="text-sm text-swhite-500 ">
          Friend since {new Date(friend.dateAccepted).getFullYear()}
        </p>
        {/* <div className="flex space-x-3">
          <button className="bg-bgst-600 text-bgst-50 py-2 px-4 rounded-lg shadow-md">
            View
          </button>
          <button className="bg-red-600 text-red-50 py-2 px-4 rounded-lg shadow-md">
            Remove
          </button>
        </div> */}
      </div>
    );
  };

export default FriendCard
