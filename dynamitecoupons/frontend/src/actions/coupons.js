import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_COUPONS, DELETE_COUPON, ADD_COUPON, GET_COUPONS_U } from "./types";

// GET COUPONS
export const getCoupons = () => (dispatch /*, getState*/) => {
  axios.get("/api/coupons/" /*, tokenConfig(getState)*/).then((res) => {
    dispatch({
      type: GET_COUPONS,
      payload: res.data,
    });
  });
  /* .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );*/
};

// DELETE COUPON
export const deleteCoupon = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/coupons/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteCoupon: "Coupon Deleted" }));
      dispatch({
        type: DELETE_COUPON,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD COUPON
export const addCoupon = (coupon) => (dispatch, getState) => {
  axios
    .post("/api/coupons/", coupon, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addCoupon: "Coupon Added" }));
      dispatch({
        type: ADD_COUPON,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET COUPONS W/LOGIN
export const getCouponsU = () => (dispatch) => {
  axios
    .get("/api/coupons_user/")
    .then((res) => {
      dispatch({
        type: GET_COUPONS_U,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
