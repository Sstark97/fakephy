import { useRef, useEffect } from "react";
import { useGiphy, useGlobalContext } from "@hooks/index";

const Searcher = () => {
  const gifRef = useRef<HTMLInputElement>(null);
  const { handleChangeGifs } = useGiphy(gifRef);


  return (
    <div className="flex justify-center items-center h-1/2 py-3">
      <input
        className="w-80 h-full placeholder:text-center valid:px-3 placeholder:text-slate-400"
        type="text"
        placeholder="Search a Gif..."
        onChange={handleChangeGifs}
      />
    </div>
  );
};

export default Searcher;
