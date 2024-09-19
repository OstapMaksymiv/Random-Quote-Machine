import { configureStore } from "@reduxjs/toolkit";
import { QuoteReducer } from "./reducer/quoteReducer";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: QuoteReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
})
export type ReducerState = ReturnType<typeof QuoteReducer>