import { DropdownController } from "../types/DropdownSelectController";

export const DropdownSelect = <T,>({
  controller,
}: {
  controller: DropdownController<T>;
}) => {
  const { options, selectedOption, setSelectedOption, stringifyOption } = controller;
  return (
    <select className="w-full outline bg-swhite-50 outline-darkness-50 rounded-sm p-1"
      value={selectedOption !== undefined ? (stringifyOption ? stringifyOption(selectedOption) : String(selectedOption)) : ""}
      onChange={(e) => {
        const selectedValue = options.find((opt) =>
          stringifyOption ? stringifyOption(opt) === e.target.value : String(opt) === e.target.value
        );
        setSelectedOption(selectedValue);
        controller.onSelect(selectedValue)
      }}
    >
      <option defaultChecked={controller.defaultOption == undefined} value=""></option>
      {options.map((option, index) => (
        <option 
          defaultChecked={controller?.defaultOption == option}

          key={index}
          value={stringifyOption ? stringifyOption(option) : String(option)}
        >
          {stringifyOption ? stringifyOption(option) : String(option)}
        </option>
      ))}
    </select>
  );
};

