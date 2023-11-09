import types from "./tutorial.type";
import initialState from "./tutorial.state";

export const tutorialReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_TUTORIAL:
      return {
        ...state,
        data_tutorial: action.payload.data,
      };
    default:
      return state;
  }
};
