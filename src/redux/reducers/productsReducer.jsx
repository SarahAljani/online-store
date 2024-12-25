import {
  ADD_DASHBOARD_PRODUCT,
  ADD_PRODUCTS,
  DELETE_DASHBOARD_PRODUCT,
  UPDATE_DASHBOARD_PRODUCT,
} from "../actions/types";

const initialState = {
  products: [],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    // ----------------------------------------------------------------------------
    // ---------fetching API----------
    case ADD_PRODUCTS:
      console.log("add products");
      return {
        ...state,
        // Add the array of products to the state
        products: action.payload,
      };
    // ----------------------------------------------------------------------------
    // --------- add dashboard product dashboard ----------
    case ADD_DASHBOARD_PRODUCT:
      return {
        ...state,
        products: [...state.products,action.payload],
      };
    // ----------------------------------------------------------------------------
    // --------- update product dashboard ----------
    case UPDATE_DASHBOARD_PRODUCT:
      return {
        ...state,
        products: state.products.map((product, i) =>
          product.id === parseInt(action.payload.id)
            ? { ...product, ...action.payload }
            : product
        ),
      };
    // ----------------------------------------------------------------------------
    // --------- delete product dashboard ----------
    case DELETE_DASHBOARD_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export default productsReducer;
