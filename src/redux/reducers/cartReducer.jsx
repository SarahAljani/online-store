import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  INCREMENT_PRODUCT_QUANTITY,
  DECREMENT_PRODUCT_QUANTITY,
} from "../actions/types";

const initialState = {
  products: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, { ...action.payload, number: 1 }],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case INCREMENT_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product, i) =>
          i === action.payload
            ? { ...product, number: product.number + 1 }
            : product
        ),
      };

    case DECREMENT_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product, i) =>
          i === action.payload && product.number > 1
            ? { ...product, number: product.number - 1 }
            : product
        ),
      };
    default:
      return state;
  }
}

export default cartReducer;
