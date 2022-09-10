import { createContext } from "react";
import {
    AppState,
    Gif
} from "../types";

export const context = createContext<AppState>({
    gifs: [] as Gif[],
    result: 0,
    handleChangeGifsInContext: () => {},
    handleChangeResultInContext: () => {}
});