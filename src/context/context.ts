import { createContext } from "react";
import {
    AppState,
    Gif
} from "../types";

export const context = createContext<AppState>({
    result: 0,
    search: "",
    page: 0,
    count: 0,
    handleChangeResultInContext: () => {},
    handleChangeSearchInContext: () => {},
    handleChangePageInContext: () => {},
    handleChangeCountInContext: () => {},
});