import { ADD_CATEGORIES, DELETE_CATEGORIES } from "../types";
export const addcategories = (categories) => ({
  type: ADD_CATEGORIES,
  payload: categories,
});
// delete product action
export const deletecategory = (categorieIndex) => ({
  type: DELETE_CATEGORIES,
  payload: categorieIndex,
});
