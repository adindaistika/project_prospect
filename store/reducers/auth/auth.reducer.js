import types from "./auth.type";
import initialState from "./auth.state";
import { setCookie, eraseCookie } from "../../../helper/helper";

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_DATA:
      setCookie("access_token", action.payload.access_token);
      setCookie("fullname", action.payload.full_name);
      return {
        ...state,
        token: action.payload.token,
      };
    case types.LOGOUT_USER:
      localStorage.clear();
      eraseCookie("access_token");
      eraseCookie("fullname");
    default:
      return state;
  }
};