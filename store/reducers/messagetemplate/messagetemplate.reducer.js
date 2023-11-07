import types from "./messagetemplate.type";
import initialState from "./messagetemplate.state";

export const messagetemlateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_MESSAGETEMPLATE:
      return {
        ...state,
        data_messagetemplate: action.payload,
      };
    default:
      return state;
  }
};
