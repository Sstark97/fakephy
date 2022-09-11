import { useState, useEffect, FC } from "react";
import { context } from "./context";
import { ChildrenProps, Gif } from "../types";

const AppProvider: FC<ChildrenProps> = ({ children }) => {
  const { Provider } = context;
  const [result, setResult] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState<string>("marvel");

  const handleChangeResultInContext = (newResult: number) => setResult(newResult);

  const handleChangeSearchInContext = (newSearch: string) => setSearch(newSearch);

  const handleChangePageInContext = (newPage: number) => setPage(newPage);

  const handleChangeCountInContext = (newCount: number) => setCount(newCount);

  return (
    <Provider
      value={{
        result,
        search,
        page,
        count,
        handleChangeSearchInContext,
        handleChangeResultInContext,
        handleChangePageInContext,
        handleChangeCountInContext,
      }}
    >
      {children}
    </Provider>
  );
};

export default AppProvider;
