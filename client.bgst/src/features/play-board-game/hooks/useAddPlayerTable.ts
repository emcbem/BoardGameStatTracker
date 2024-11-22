import { useEffect, useState } from "react";
import { AddPlayerTableController } from "../types/AddPlayerTableController";
import { UserPlayedGame } from "../types/UserPlayedGame";
import { useUserContext } from "../../authentication/hooks/useUserContext";
import { FriendQueries } from "../../friends/tanstack/friend-queries";

export const useAddPlayerTable = (minPlayers: number, maxPlayers: number) => {
  const user = useUserContext()

  const {data: friends} = FriendQueries.useGetUserFriend(user.id_token, user.user?.id ?? 0)
  const nullUser = {
    name: "",
    rank: 0,
    points: 0,
    linked: false,
  } as UserPlayedGame;
  const [players, setPlayers] = useState([nullUser]);


  useEffect(() => {
    const additionalPlayers = Array.from(
        { length: minPlayers - players.length },
        () => nullUser
      );
      setPlayers((prevPlayers) => [...prevPlayers, ...additionalPlayers].slice(0, minPlayers));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minPlayers])

  const addPlayer = () => {
    if (players.length < maxPlayers) {
      setPlayers([...players, nullUser]);
    }
  };

  const removePlayer = (index: number) => {
    if (players.length > minPlayers) {
      setPlayers(players.filter((_, i) => i !== index));
    }
  };

  const handleNameChange = (index: number, value: string) => {
    setPlayers((x) =>
      x.map((player, i) => (i === index ? { ...player, name: value } : player))
    );
  };

  const handleRankChange = (index: number, value: number) => {
    setPlayers((x) =>
      x.map((player, i) => (i === index ? { ...player, rank: value } : player))
    );
  };

  const handlePointChange = (index: number, value: number) => {
    setPlayers((x) =>
      x.map((player, i) =>
        i === index ? { ...player, points: value } : player
      )
    );
  };

  const handleLinkPlayer = (index: number, userId?: number, name?: string) => {
    setPlayers((x) =>
      x.map((player, i) =>
        i === index
          ? player.linked
            ? ({ ...player, linked: false, userId: 0, name: "" } as UserPlayedGame)
            : ({ ...player, linked: true, userId: userId, name: name } as UserPlayedGame)
          : player
      )
    );
  };

  return {
    addPlayer,
    maxPlayers,
    minPlayers,
    players,
    removePlayer,
    handleNameChange,
    handleRankChange,
    handlePointChange,
    handleLinkPlayer,
    friends: friends?.friends
  } as AddPlayerTableController;
};
