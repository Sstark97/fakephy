import { useRef } from "react";
import { useGiphy, useGiphySWR } from "@hooks/index";
import { ReactComponent as SearchIcon } from "@assets/search-icon.svg";

const Searcher = () => {
  const gifRef = useRef<HTMLInputElement>(null);
  const { mutateGifs } = useGiphySWR();

  const handleSearch = () => {
    const gif = gifRef.current?.value;
    mutateGifs(gif);
    if (gifRef.current){
      gifRef.current.value = ""
    };
  };

  return (
    <div className="flex justify-center items-center h-1/2 py-3">
      <input
        className="w-3/4 h-full xl:w-9/12 placeholder:text-center valid:px-3 placeholder:text-slate-400 rounded-l-lg"
        type="text"
        placeholder="Search a Gif..."
        ref={gifRef}
      />
      <button
        className="bg-purple-500 h-full p-3 rounded-r-lg"
        onClick={handleSearch}
      >
        <SearchIcon className="w-full h-full"/>
      </button>
    </div>
  );
};

export default Searcher;
