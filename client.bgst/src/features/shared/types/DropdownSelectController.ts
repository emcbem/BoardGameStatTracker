export interface DropdownController<T> {
    options: T[];
    selectedOption: T | undefined;
    setSelectedOption: React.Dispatch<React.SetStateAction<T | undefined>>;
    stringifyOption?: (option: T) => string; 
    onSelect: (option: T | undefined) => void,
    defaultOption: T | undefined
  }