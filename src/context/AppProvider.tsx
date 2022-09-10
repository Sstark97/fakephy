import { useState, useEffect, FC } from "react";
import { context } from "./context";
import { ChildrenProps, Gif } from "../types";

const AppProvider: FC<ChildrenProps> = ({ children }) => {
    const { Provider } = context;
    const [gifs, setGifs] = useState<Gif[]>()
    const [result, setResult] = useState<number>(0);

    const handleChangeGifsInContext = (newGifs: Gif[]) => {
        setGifs(newGifs);
    };

    const handleChangeResultInContext = (newResult: number) => {
        setResult(newResult);
    };
    
    return (
        <Provider value={{ gifs, result, handleChangeGifsInContext, handleChangeResultInContext }}>
        {children}
        </Provider>
    );
};

export default AppProvider;