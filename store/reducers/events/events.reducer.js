import types from "./events.type";
import initialState from "./events.state";
import { encrypt_data, setCookie, eraseCookie } from "../../../helper/helper";

export const eventReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_EVENT:
      return {
        ...state,
        data_event: action.payload,
      };
    case types.DATA_EVENT_ID:
      return {
        ...state,
        data_event_id: action.payload,
      };
    default:
      return state;
  }
};
