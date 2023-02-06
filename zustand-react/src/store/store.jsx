import { Suspense } from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const voting = "https://api.github.com/search/users?q=john&per_page=5";

export const useStore = create(
  devtools(
    subscribeWithSelector(
      immer((set) => ({
        votes: voting,
        Votes: {},
        addVotes: () => set((state) => ({ votes: state.votes + 1 })),

        fruits: ["apple", "banana", "orange"],
        addFruits: (fruit) => {
          set((state) => ({
            fruits: [...state.fruits, fruit],
          }));
        },

        fetch: async (voting) => {
          const response = await fetch(voting);
          const json = await response.json();

          set({
            Votes: json.items,
          });
        },
        data: {
          style: "light",
          visible: true,
        },

        style: "light",
        setStyle: () =>
          set((state) => ({
            data: {
              ...state.data,
              style: state.data.style == "light" ? "dark" : "light",
            },
          })),

        visible: true,
        setVisible: () =>
          set((state) => ({
            visible: !state.visible,
          })),
        // setVisible: () =>
        //   set((state) => ({
        //     data: {
        //       ...state.data,
        //       visible: !state.data.visible,
        //     },
        //   })),
      }))
    )
  )
);

export const { getState, setState, subscribe } = useStore;

useStore.subscribe((state) => state.visible, console.log, {
  fireImmediately: true,
});
