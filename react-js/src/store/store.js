import {createStore,combineReducers} from "redux"
import {allRecipesReducer,searchTermReducer,favoriteRecipesReducer} from "./reducers"
const reducers = {
  allRecipes: allRecipesReducer,
  searchTerm: searchTermReducer,
  favoriteRecipes: favoriteRecipesReducer,
};


const store = createStore(combineReducers(reducers));

// import { configureStore } from "@reduxjs/toolkit";

// export default configureStore({
//     reducer : {

//     }
// })

export default store;