import { FC } from "react";
import { ContentListProps, Gif } from "../types";
import Content from "./Content";
import Pagination from "@containers/Pagination";

const ContentList: FC<ContentListProps> = ({ content }) => {
  return (
    <>
    <ul className="flex flex-wrap gap-x-3 gap-y-3 h-[90%] overflow-y-auto justify-center py-10 xl:scrollbar scrollbar-thumb-gray-900 scrollbar-track-transparent">
      {content.map((item: Gif) => (
        <Content
          key={item.id}
          src={item.images.downsized.url}
          alt={item.title}
        />
      ))}
    </ul>
    <Pagination />
    </>
  );
};

export default ContentList;
