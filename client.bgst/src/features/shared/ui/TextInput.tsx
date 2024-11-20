
export const TextInput = ({input, setInput, placeholder}: {input: string, setInput: (input: string) => void, placeholder: string}) => {
  return (
    <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="w-full p-2 rounded-md border-swhite-300 shadow-sm focus:outline-bgst-500 focus:border-bgst-500 focus:ring-bgst-500 "
          />
  )
}
