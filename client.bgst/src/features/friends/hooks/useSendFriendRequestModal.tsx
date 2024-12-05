import { useState } from "react";
import { useModalController } from "../../shared/hooks/useModalController";
import { TextInput } from "../../shared/ui/TextInput";
import { FriendQueries } from "../tanstack/friend-queries";
import { useUserContext } from "../../authentication/hooks/useUserContext";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

export const useSendFriendRequestModal = () => {
  const [friendCode, setFriendCode] = useState<string>("");
  const user = useUserContext();

  const mutation = FriendQueries.useAddFriendRequest(user.user?.id ?? 0);

  const handleSubmit = () => {
    mutation.mutate({ idToken: user!.id_token!, friendCode: friendCode });
  };

  const handleCopyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("Friend code copied to clipboard!"); 
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  const controller = useModalController(
    "Add Friend?",
    <>
      <div className="space-y-6">
        <div>
          <p>
            If you want someone to send you a friend request, your friend code
            is:
          </p>
          <div className="flex items-center">
            <span className="text-lg text-darkness-800 mr-2 bg-swhite-100 p-2 rounded-md shadow-sm">
              {user.user?.friendcode}
            </span>
            <button
              onClick={() => handleCopyToClipboard(user.user?.friendcode ?? "")}
              className="text-bgst-500 hover:text-bgst-700 transition-colors"
              title="Copy to clipboard"
            >
              <ClipboardDocumentIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border-b pb-4">
          <label className="block mb-2">Enter Friend Code to send friend request:</label>
          <TextInput
            input={friendCode}
            placeholder="123456-78910..."
            setInput={(input: string) => setFriendCode(input)}
            className="p-2 rounded-md border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </>,
    () => {
      setFriendCode("");
    },
    handleSubmit
  );

  return controller;
};
