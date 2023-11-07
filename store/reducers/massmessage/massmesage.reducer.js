import types from "./massmessage.type";
import initialState from "./massmessage.state";

export const massmessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_MASSMESSAGE:
      return {
        ...state,
        data_massmessage: action.payload,
      };
    default:
      return state;
  }
};
