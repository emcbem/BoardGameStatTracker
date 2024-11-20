import  { useState } from "react";
import { useModalController } from "../../shared/hooks/useModalController";
import { TextInput } from "../../shared/ui/TextInput";
import { FriendQueries } from "../tanstack/friend-queries";
import { useUserContext } from "../../authentication/hooks/useUserContext";

export const useSendFriendRequestModal = () => {
  const [friendCode, setFriendCode] = useState<string>("");
    const user = useUserContext()

 const mutation = FriendQueries.useAddFriendRequest(user.user?.id ?? 0) 

  const handleSubmit = () => 
  {
    mutation.mutate({idToken: user!.id_token!, friendCode: friendCode})
  }

  const controller = useModalController(
    "Add Friend?",
    <>
      <div>
        Enter Friend Code
        <TextInput
          input={friendCode}
          placeholder="123456-78910..."
          setInput={(input: string) => setFriendCode(input)}
        />
      </div>
    </>,
    () => {setFriendCode("")},
    handleSubmit
  );

  return controller;
};
