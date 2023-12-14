import types from "./auth.type";
import initialState from "./auth.state";
import { setCookie, eraseCookie } from "../../../helper/helper";

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_DATA:
      setCookie("access_token", action.payload.access_token);
      setCookie("id", action.payload.id);
      setCookie("fullname", action.payload.full_name);
      setCookie("email", action.payload.email);
      setCookie("foto_profile", action.payload.foto_profile);
      return {
        ...state,
        token: action.payload.token,
      };
    case types.USER_DATA:
      return {
        ...state,
        user_data: action.payload,
      };
    case types.LOGOUT_USER:
      localStorage.clear();
      eraseCookie("access_token");
      eraseCookie("fullname");
      eraseCookie("id");
      eraseCookie("email");
      eraseCookie("foto_profile");
    default:
      return state;
  }
};
