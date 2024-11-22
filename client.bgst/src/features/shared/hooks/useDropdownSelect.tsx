import { useState } from "react";
import { DropdownController } from "../types/DropdownSelectController";

export const useDropdownSelect = <T,>(
  options: T[],
  stringifyOption: (option: T) => string,
  onSelect: (option: T) => void,
  defaultOption?: T | undefined
) => {
  const [selectedOption, setSelectedOption] = useState<T | undefined>();
  return {
    options,
    selectedOption,
    setSelectedOption,
    stringifyOption,
    onSelect,
    defaultOption
  } as DropdownController<T>;
};
