import { ADD_PRODUCT, DELETE_PRODUCT, INCREMENT_PRODUCT_QUANTITY,DECREMENT_PRODUCT_QUANTITY } from "../types";
// add product action
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});
// delete product action
export const deleteProduct = (productIndex) => ({
  type: DELETE_PRODUCT,
  payload: productIndex,
});
// increment number of product action
export const incrementProduct = (productIndex) => ({
  type: INCREMENT_PRODUCT_QUANTITY,
  payload: productIndex,
});
// decrement number of product action
export const DEcrementProduct = (productIndex) => ({
  type: DECREMENT_PRODUCT_QUANTITY,
  payload: productIndex,
});