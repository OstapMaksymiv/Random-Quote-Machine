import { TypedUseSelectorHook } from "react-redux";
import { ReducerState } from "../store";
import { useSelector } from "react-redux";

export const useTypedSelector:TypedUseSelectorHook<ReducerState> = useSelector