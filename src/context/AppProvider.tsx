import { useReducer, FC } from "react";
import { context } from "./context";
import { reducer, giveMyInitialState } from "./reducer";
import { ChildrenProps } from "../types";

const AppProvider: FC<ChildrenProps> = ({ children }) => {
  const { Provider } = context;
  const [state, dispatch] = useReducer(reducer, giveMyInitialState());

  const handleChangeResultInContext = (newResult: number) =>
    dispatch({ type: "RESULT", payload: { ...state, result: newResult } });

  const handleChangeSearchInContext = (newSearch: string) =>
    dispatch({ type: "SEARCH", payload: { ...state, search: newSearch } });

  const handleChangePageInContext = (newPage: number) =>
    dispatch({ type: "PAGE", payload: { ...state, page: newPage } });

  const handleChangeCountInContext = (newCount: number) =>
    dispatch({ type: "COUNT", payload: { ...state, count: newCount } });

  const handleChangeMaxPageInContext = (newMaxPage: number) =>
    dispatch({ type: "MAX_PAGE", payload: { ...state, maxPage: newMaxPage } });

  return (
    <Provider
      value={{
        ...state,
        handleChangeSearchInContext,
        handleChangeResultInContext,
        handleChangePageInContext,
        handleChangeCountInContext,
        handleChangeMaxPageInContext,
      }}
    >
      {children}
    </Provider>
  );
};

export default AppProvider;
