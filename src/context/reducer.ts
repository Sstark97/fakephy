import { InitialState, ReducerObject, ReducerAction, ActionTypes } from "../types";

export const giveMyInitialState = (): InitialState => ({
    result: 0,
    search: "marvel",
    page: 0,
    count: 0,
    maxPage: 0,
});

const reducerObject: ReducerObject = {

    [ActionTypes.RESULT]: (state: InitialState, action: ReducerAction): InitialState => ({
        ...state,
        result: action.payload?.result || 0,
    }),

    [ActionTypes.SEARCH]: (state: InitialState, action: ReducerAction): InitialState => ({
        ...state,
        search: action.payload?.search || "",
    }),

    [ActionTypes.PAGE]: (state: InitialState, action: ReducerAction): InitialState => ({
        ...state,
        page: action.payload?.page || 0,
    }),

    [ActionTypes.COUNT]: (state: InitialState, action: ReducerAction): InitialState => ({
        ...state,
        count: action.payload?.count || 0,
    }),

    [ActionTypes.MAX_PAGE]: (state: InitialState, action: ReducerAction): InitialState => ({
        ...state,
        maxPage: action.payload?.maxPage || 0,
    }),
};

export const reducer = (state: InitialState, action: ReducerAction): InitialState => (reducerObject[action.type](state, action) ?? state);