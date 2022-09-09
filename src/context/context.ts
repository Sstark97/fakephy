import { createContext } from "react";
import {
    AppState,
    Gif
} from "../types";

export const context = createContext<AppState>({
    gifs: [] as Gif[],
    handleChangeGifsInContext: () => { }
});