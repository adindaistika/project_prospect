import types from "./contactcategory.type";
import initialState from "./contactcategory.state";

export const contactCategoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_CONTACTCATEGORY:
      return {
        ...state,
        data_contactcategory: action.payload,
      };
    default:
      return state;
  }
};
