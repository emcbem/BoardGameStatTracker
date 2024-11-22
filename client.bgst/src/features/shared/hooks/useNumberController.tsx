import { useState } from "react"
import { NumberInputController } from "../types/NumberInputController"

export const useNumberController = (props :{min: number, max: number, handlePointChange?: (value: number) => void, placeholder? : string}) => {
   const [selectedValue, setSelectedValue] = useState<number>(0)
  return (
    {
        selectedValue,
        setSelectedValue,
        minValue: props.min,
        maxValue: props.max,
        placeholder: props.placeholder,
        onChange: props.handlePointChange
    }as NumberInputController
    
  )
}
