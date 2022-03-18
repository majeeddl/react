

const setSearchTerm = (term)=>{
    return {
        type : 'searchTerm/set',
        payload : term
    }
}

const clearSearchTerm = ()=>{
    return {
        type : 'searchTerm/clear'
    }
}

//*********** */
const loadData = () => {
  return {
    type: "allRecipes/load",
    payload: [{},{}],
  };
};

const addRecipe = (recipe)=>{
    return {
        type : 'favoriteRecipe/add',
        payload : recipe
    }
}

const removeRecipe = (recipe) => {
  return {
    type: "favoriteRecipe/remove",
    payload: recipe,
  };
};

export {
    setSearchTerm,
    clearSearchTerm,
    loadData,
    addRecipe,
    removeRecipe
}