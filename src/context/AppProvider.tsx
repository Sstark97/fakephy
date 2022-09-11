import { useState, useEffect, FC } from "react";
import { context } from "./context";
import { ChildrenProps, Gif } from "../types";

const AppProvider: FC<ChildrenProps> = ({ children }) => {
    const { Provider } = context;
    const [gifs, setGifs] = useState<Gif[]>()
    const [result, setResult] = useState<number>(0);
    const [search, setSearch] = useState<string>("marvel");

    const handleChangeGifsInContext = (newGifs: Gif[]) => {
        setGifs(newGifs);
    };

    const handleChangeResultInContext = (newResult: number) => {
        setResult(newResult);
    };

    const handleChangeSearchInContext = (newSearch: string) => {
        setSearch(newSearch);
    };
    
    return (
        <Provider value={{ gifs, result, search, handleChangeSearchInContext, handleChangeGifsInContext, handleChangeResultInContext }}>
        {children}
        </Provider>
    );
};

export default AppProvider;