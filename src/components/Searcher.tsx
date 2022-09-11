import { useRef, FormEvent} from "react";
import { useGiphySWR } from "@hooks/index";
import { ReactComponent as SearchIcon } from "@assets/search-icon.svg";

const Searcher = () => {
  const gifRef = useRef<HTMLInputElement>(null);
  const { mutateGifs } = useGiphySWR();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const gif = gifRef.current?.value;
    mutateGifs(gif);
    if (gifRef.current){
      gifRef.current.value = ""
    };
  };

  return (
    <form className="flex justify-center items-center h-1/2 py-3" onSubmit={handleSearch}>
      <input
        className="w-3/4 h-full xl:w-9/12 placeholder:text-center valid:px-3 placeholder:text-slate-400 rounded-l-lg"
        type="text"
        placeholder="Search a Gif..."
        ref={gifRef}
      />
      <button
        className="bg-purple-500 h-full p-3 rounded-r-lg"
        type="submit"
      >
        <SearchIcon className="w-full h-full"/>
      </button>
    </form>
  );
};

export default Searcher;
