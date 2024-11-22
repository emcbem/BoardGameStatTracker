import { NumberInputController } from '../types/NumberInputController'



export const NumberInput = ({controller}: {controller: NumberInputController}) => {
  return (
    <input type="number" 
    min={controller.minValue}
    max={controller.maxValue}
    value={String(controller.selectedValue)}
    placeholder={controller.placeholder}
    className='w-full bg-swhite-50 outline text-right outline-darkness-50 h-[26.5px] rounded-sm'
    onChange={(e) => {
        const value = Number.parseInt(e.target.value)
        controller.setSelectedValue(value)
        if(controller.onChange != null) {
            controller.onChange(value)
        }
    }}
    />
  )
}
 