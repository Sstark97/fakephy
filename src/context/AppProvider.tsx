import { useState, useEffect, FC } from "react";
import { context } from "./context";
import { ChildrenProps, Gif } from "../types";

const AppProvider: FC<ChildrenProps> = ({ children }) => {
    const { Provider } = context;
    const [gifs, setGifs] = useState<Gif[]>()

    const handleChangeGifsInContext = (newGifs: Gif[]) => {
        setGifs(newGifs);
    };
    
    return (
        <Provider value={{ gifs, handleChangeGifsInContext }}>
        {children}
        </Provider>
    );
};

export default AppProvider;