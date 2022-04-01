// import {createStore,combineReducers} from "redux"
// import {allRecipesReducer,searchTermReducer,favoriteRecipesReducer} from "./reducers"
// const reducers = {
//   allRecipes: allRecipesReducer,
//   searchTerm: searchTermReducer,
//   favoriteRecipes: favoriteRecipesReducer,
// };


// const store = createStore(combineReducers(reducers));

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter/counterSlice'

///create store with use of reduxjs toolkit
const store = configureStore({
    reducer : {
      counter : counterReducer
    }
})

export default store;