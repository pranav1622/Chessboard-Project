import { configureStore } from "@reduxjs/toolkit";
import chessBoardMatrix from "../Slice/chessBoardMatrix";

const ReduxStore = configureStore({
  name: "Chessboard",
  reducer: {
    ChessBoardMatrix: chessBoardMatrix,
  },
});
export default ReduxStore;
