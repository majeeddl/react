import create, { createStore } from "zustand";

export const useStore = create((set) => ({
  votes: 1,
  addVotes : ()=> set(state => ({ votes : state.votes + 1}))
}));

export const { getState, setState, subscribe,  } = useStore;
