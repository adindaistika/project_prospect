import types from "./messagetemplate.type";
import initialState from "./messagetemplate.state";

export const messagetemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_MESSAGETEMPLATE:
      return {
        ...state,
        data_messagetemplate: action.payload,
      };
    case types.DATA_MESSAGETEMPLATEID:
      return {
        ...state,
        data_messagetemplateid: action.payload,
      };
    case types.DATA_MESSAGE:
      return {
        ...state,
        data_message: action.payload,
      };
    case types.DATA_FILEATTACHMENT:
      return {
        ...state,
        data_filecount: action.payload,
      };
    default:
      return state;
  }
};
