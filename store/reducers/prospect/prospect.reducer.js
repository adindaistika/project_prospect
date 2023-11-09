import types from "./prospect.type";
import initialState from "./prospect.state";

export const prospectReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_PROSPECT:
      return {
        ...state,
        data_prospect: action.payload.data,
      };
    default:
      return state;
  }
};
