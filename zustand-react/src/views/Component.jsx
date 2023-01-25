import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useStore } from "zustand";
import { ThemeContext } from "../context/theme.provider";

const Component = () => {
  const { store, theme } = useContext(ThemeContext);
  const slice = useStore(store);

  useEffect(() => {
    console.log(store);
  }, []);
  return (
    <>
      <div>Component </div>

      <div>{slice.counter}</div>

      <div> {theme}</div>

      <button onClick={() => slice.setCounter()}> set count</button>
    </>
  );
};

export default Component;
