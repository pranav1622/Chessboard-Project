import { configureStore } from "@reduxjs/toolkit";
import chessBoardMatrix from "./chessBoardMatrix";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const ReduxStore = configureStore({
  reducer: {
    ChessBoardMatrix: chessBoardMatrix,
  },
});

export type RootState = ReturnType<typeof ReduxStore.getState>;

export type AppDispatch = typeof ReduxStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default ReduxStore;
