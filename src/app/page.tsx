"use client";
import { Provider } from "react-redux";
import MainPage from "./components/mainpage/MainPage";
import ReduxStore from "./Slice/ReduxStore";
export default function Home() {
  return (
    <>
      <Provider store={ReduxStore}>
        <MainPage />
      </Provider>
    </>
  );
}
