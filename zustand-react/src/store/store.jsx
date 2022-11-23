import create, { createStore } from "zustand";
import { devtools } from "zustand/middleware";

const voting = "https://api.github.com/search/users?q=john&per_page=5";

export const useStore = create(
  devtools((set) => ({
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
  }))
);

export const { getState, setState, subscribe } = useStore;
