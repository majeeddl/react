// const initialState = {
//   allRecipes: [
//     {
//       id: 1,
//       name: "Recipe 1",
//     },
//     {
//       id: 2,
//       name: "Recipe 2",
//     },
//   ],
//   favoriteRecipes: [],
//   searchTerm: "",
// };

const initialAllRecipes = [
  {
    id: 1,
    name: "Recipe 1",
  },
  {
    id: 2,
    name: "Recipe 2",
  },
];
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch (action.type) {
    case "allRecipes/load":
      return action.payload;
    case "allRecipes/add":
      return [
          ...allRecipes,
          ...action.payload
      ]
    default:
      return allRecipes;
  }
};

const initialSearchTerm = "";

const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch (action.type) {
    case "searchTerm/set":
      return action.payload;
    case "searchTerm/clear":
      return "";
    default:
      return searchTerm;
  }
};

// Create the initial state for this reducer.
const initialFavoriteRecipes = [];

const favoriteRecipesReducer = (
  favoriteRecipes = initialFavoriteRecipes,
  action
) => {
  switch (action.type) {
    case "favoriteRecipes/add": {
      return [...favoriteRecipes, action.payload];
    }
    case "favoriteRecipes/remove": {
      return favoriteRecipes.filter((item) => item.id !== action.payload.id);
    }
    default: {
      return favoriteRecipes;
    }
  }
};

export { allRecipesReducer, searchTermReducer, favoriteRecipesReducer };
