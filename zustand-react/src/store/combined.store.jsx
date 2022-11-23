import create from "zustand";
import { createBearSlice } from "./slices/bear.slice";
import { createFishSlice } from "./slices/fish.slice";

export const useBoundStore = create((...a) => ({
  ...createFishSlice(...a),
  ...createBearSlice(...a),
}));
