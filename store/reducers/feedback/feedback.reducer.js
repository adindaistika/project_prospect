import types from "./feedback.type";
import initialState from "./feedback.state";

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_FEEDBACK:
      return {
        ...state,
        data_feedback: action.payload,
      };
    case types.DATA_FEEDBACK_ID:
      return {
        ...state,
        data_feedback_id: action.payload,
      };
    default:
      return state;
  }
};
