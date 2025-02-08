import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage

const initialState = {
  cartProducts: [],
  addedToCart: {}, 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.cartProducts.findIndex(
        (prod) => prod.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If product exists, remove it (toggle off)
        state.cartProducts.splice(existingProductIndex, 1);
        delete state.addedToCart[action.payload.id]; // Remove from tracking
      } else {
        // If product does not exist, add it (toggle on)
        state.cartProducts.push({ ...action.payload, number: 1 });
        state.addedToCart[action.payload.id] = true; // Mark as added
      }
    },

    deleteProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
      delete state.addedToCart[action.payload]; // Remove from addedToCart
    },
    incrementProductQuantity: (state, action) => {
      const product = state.cartProducts.find(
        (prod) => prod.id === action.payload
      );
      if (product) {
        product.number += 1;
      }
    },
    decrementProductQuantity: (state, action) => {
      const product = state.cartProducts.find(
        (prod) => prod.id === action.payload
      );
      if (product && product.number > 1) {
        product.number -= 1;
      }
    },
  },
});

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export const {
  addProduct,
  deleteProduct,
  incrementProductQuantity,
  decrementProductQuantity,
} = cartSlice.actions;

export default persistedReducer;
