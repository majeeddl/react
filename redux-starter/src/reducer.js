import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";

let lastId = 0;

const reducer = (state = [], action) => {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolve: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
  // if(action.type == 'bugAdded'){
  //     return [
  //         ...state,
  //         {
  //             id : ++lastId,
  //             description : action.payload.description,
  //             resolve : false
  //         }
  //     ]
  // }else if(action.type == 'bugRemoved'){
  //     return state.filter(bug => bug.id !== action.payload.id)
  // }

  // return state;
};

export default reducer;
