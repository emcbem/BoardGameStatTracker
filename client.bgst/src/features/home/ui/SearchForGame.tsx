import { useState } from "react";
import { useNavigate } from "react-router";

export const SearchForGame = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");

  const handleClick = () => {
    navigate(`/boardgames/${value ? value.toString() : ""}`)
  }

  const handleKeyDown = (key: string) => 
  {
    console.log(key)
    if(key == "Enter" || key == "Return")
    {
      handleClick()
    }
  }

  return (
    <>
      <input
        value={value}
        onInput={(e) => setValue(e.currentTarget.value)}
        onKeyDown={(e) => handleKeyDown(e.key)}
        type="text"
        placeholder="Search board games..."
        className="w-full md:w-1/2 p-3 border bg-swhite-50 text-swhite-800 border-swhite-300 rounded-l-lg focus:outline-none focus:border-bgst-500"
      />
      <button
        className="bg-bgst-700 text-bgst-50 px-6 py-3 rounded-r-lg hover:bg-bgst-600"
        onClick={() => handleClick()}
      >
        Search
      </button>
    </>
  );
};
