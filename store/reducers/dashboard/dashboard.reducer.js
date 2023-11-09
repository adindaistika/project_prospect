import types from "./dashboard.type";
import initialState from "./dashboard.state";

export const dashboardReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_EVENT_UPDATE:
      return {
        ...state,
        data_event_terupdate: action.payload.data,
      };
    case types.DATA_EVENT_COMMING:
      return {
        ...state,
        data_event_comming: action.payload.data,
      };
    case types.DATA_EVENT_GOAL:
      return {
        ...state,
        data_event_goal: action.payload.data,
      };
    default:
      return state;
  }
};
