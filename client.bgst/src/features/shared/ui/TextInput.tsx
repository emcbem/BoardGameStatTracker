
export const TextInput = ({input, setInput, placeholder, disabled, className}: {input: string, setInput: (input: string) => void, placeholder: string, disabled?: boolean, className?: string}) => {
  return (
    <input
            type="text"
            value={input}
            disabled={disabled}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className={`w-full h-full p-2  bg-inherit border-swhite-300 shadow-sm ring-inset outline-inherit ${className} disabled:bg-swhite-100 disabled:text-swhite-700`}
          />
  )
}
