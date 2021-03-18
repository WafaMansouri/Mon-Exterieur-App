import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from "../actions/types";
const initState = {
  listProducts: null,
  errors: null,
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        listProducts: action.payload,
        errors: null,
      };

    case GET_PRODUCTS_FAIL:
      return { ...state, listProducts: null, errors: action.payload };

    default:
      return state;
  }
};
export default ProductsReducer;
