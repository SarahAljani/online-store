import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default to localStorage for web
import userReducer from "./reducers/userSlice"; // Your persisted user reducer
import cartReducer from "./reducers/cartSlice";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";

// Persist config for the user reducer
const userPersistConfig = {
  key: "user",
  storage,
};

// Persist config for the cart reducer
const cartPersistConfig = {
  key: "cart",
  storage,
};

// Combine reducers with persisted reducers
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  cart: persistReducer(cartPersistConfig, cartReducer), // Persisting cart as well
  products: productsReducer,
  categories: categoriesReducer,
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for Redux Persist
    }),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
