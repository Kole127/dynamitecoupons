import {
  GET_COUPONS,
  DELETE_COUPON,
  ADD_COUPON,
  GET_COUPONS_U,
} from "../actions/types.js";

const initialState = {
  coupons: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COUPONS:
    case GET_COUPONS_U:
      return {
        ...state,
        coupons: action.payload,
      };

    case DELETE_COUPON:
      return {
        ...state,
        coupons: state.coupons.filter((coupon) => coupon.id !== action.payload),
      };

    case ADD_COUPON:
      return {
        ...state,
        coupons: [...state.coupons, action.payload],
      };

    /*
    case CLEAR_COUPONS:
      return {
        ...state,
        coupons: [],
      };
    */
    default:
      return state;
  }
}
