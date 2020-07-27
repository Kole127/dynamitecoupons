import axios from "axios";
/*import { createMessage, returnErrors } from "./messages";

import { tokenConfig } from "./auth";
*/
import { GET_COUPONS, DELETE_COUPON, ADD_COUPON } from "./types";

// GET COUPONS
export const getCoupons = () => (dispatch) => {
  axios
    .get("/api/coupons/")
    .then((res) => {
      dispatch({
        type: GET_COUPONS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE COUPON
export const deleteCoupon = (id) => (dispatch) => {
  axios
    .delete(`/api/coupons/${id}/`)
    .then((res) => {
      /* dispatch(createMessage({ deleteCoupon: "Coupon Deleted" }));*/
      dispatch({
        type: DELETE_COUPON,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD COUPON
export const addCoupon = (coupon) => (dispatch) => {
  axios
    .post("/api/coupons/", coupon)
    .then((res) => {
      /* dispatch(createMessage({ addCoupon: "Coupon Added" }));*/
      dispatch({
        type: ADD_COUPON,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
