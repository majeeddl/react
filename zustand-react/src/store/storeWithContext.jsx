import { useContext } from "react";
import { createStore, useStore } from "zustand";
import ThemeProvider from "../context/theme.provider";

export const store = createStore((set, get, m) => ({
  counter: 10,
  setCounter: () => {
    // const context = useContext(ThemeProvider);

    context.setTheme("dark");
  },
}));
