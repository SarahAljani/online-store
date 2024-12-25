import { ADD_CATEGORIES,DELETE_CATEGORIES } from "../actions/types";

const initialState = {
  categories: [],
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories, { ...action.payload }],
      };

    case DELETE_CATEGORIES:
      return {
        ...state,
        categories: state.categories.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
}

export default categoriesReducer;
