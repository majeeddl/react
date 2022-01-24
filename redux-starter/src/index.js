import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import store from "./store";

store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch({ type: BUG_ADDED, payload: { description: "bug one" } });

store.dispatch({ type: BUG_REMOVED, payload: { id: 1 } });

console.log(store.getState());
