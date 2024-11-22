import { useContext } from "react"
import { TextInput } from "../../shared/ui/TextInput"
import { PlayerControllerContext } from "../context/PlayerControllerContext"

export const PlayerNameChange = ({index}: {index: number}) => {
    const controller = useContext(PlayerControllerContext)
    const currentPlayer = controller.players.find((_, i) => i == index)
    const disabled= currentPlayer?.linked ?? false
    const name = currentPlayer?.name
  return (
    <div className="bg-swhite-50 outline outline-darkness-50 focus:border-none focus:outline-none focus:outline-transparent rounded-sm h-[26.5px]">

    <TextInput placeholder={`Player ${index + 1}`} input={name ?? ""} setInput={(value: string) => controller.handleNameChange(index, value)} disabled={disabled}  />
    </div>
  )
}
