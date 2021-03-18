import axios from "axios";
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from "./types";

const get_products_action = () => (dispatch) => {
  axios
    .get("https://api.mocki.io/v1/af37df01")
    .then((result) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: result.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_PRODUCTS_FAIL,
        payload: err,
      });
    });
};

export default get_products_action;
