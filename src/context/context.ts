import { createContext } from "react";
import { AppState } from "../types";

export const context = createContext<AppState>({
    result: 0,
    search: "",
    page: 0,
    count: 0,
    maxPage: 0,
    handleChangeResultInContext: () => {},
    handleChangeSearchInContext: () => {},
    handleChangePageInContext: () => {},
    handleChangeCountInContext: () => {},
    handleChangeMaxPageInContext: () => {},
});