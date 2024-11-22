export interface NumberInputController {
    selectedValue: number | undefined,
    setSelectedValue: React.Dispatch<React.SetStateAction<number | undefined>>,
    minValue: number, 
    maxValue: number,
    placeholder?: string,
    onChange?: (value: number) => void

}