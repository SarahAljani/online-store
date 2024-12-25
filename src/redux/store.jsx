// store.js
import { legacy_createStore as createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  categories: categoriesReducer,
  // other reducers
});

const store = createStore(rootReducer);

export default store;
