import {
  ADD_DASHBOARD_PRODUCT,
  ADD_PRODUCTS,
  DELETE_DASHBOARD_PRODUCT,
  UPDATE_DASHBOARD_PRODUCT,
} from "../types";
// Action to add products to the redux store
export const addProducts = (products) => ({
  type: ADD_PRODUCTS,
  payload: products,
});
// delete product action
export const deleteProduct = (productId) => ({
  type: DELETE_DASHBOARD_PRODUCT,
  payload: productId,
});
// add product in dashboard action
export const addDashboardProduct = (product) => ({
  type: ADD_DASHBOARD_PRODUCT,
  payload: product,
});
// update product in dashboard action
export const updateDashboardProduct = (product) => ({
  type: UPDATE_DASHBOARD_PRODUCT,
  payload: product,
});
