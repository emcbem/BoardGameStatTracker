import { useNumberController } from "../../shared/hooks/useNumberController"
import { NumberInput } from "../../shared/ui/NumberInput"

export const PlayerPointChanger = ({handlePointChange}: {handlePointChange: (value: number) => void}) => {
    const controller = useNumberController({min:-10000, max:10000, handlePointChange: handlePointChange, placeholder: "0, 5..."})

  return (
    <NumberInput controller={controller}/>
  )
}
