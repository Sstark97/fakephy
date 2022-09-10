import { useRef } from "react";
import { useGiphy } from "@hooks/index";
import { ReactComponent as SearchIcon } from "@assets/search-icon.svg";

const Searcher = () => {
  const gifRef = useRef<HTMLInputElement>(null);
  const { handleChangeGifs } = useGiphy(gifRef);


  return (
    <div className="flex justify-center items-center h-1/2 py-3">
      <input
        className="w-3/4 h-full placeholder:text-center valid:px-3 placeholder:text-slate-400 rounded-l-lg"
        type="text"
        placeholder="Search a Gif..."
        ref={gifRef}
      />
      <button className="bg-purple-500 h-full p-3 rounded-r-lg

" onClick={handleChangeGifs}>
        <SearchIcon/>
      </button>
    </div>
  );
};

export default Searcher;
