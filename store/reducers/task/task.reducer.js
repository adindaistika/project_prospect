import types from "./task.type";
import initialState from "./task.state";

export const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_TASK:
      return {
        ...state,
        data_task: action.payload.data,
      };
    case types.DATA_TASK_ID:
      return {
        ...state,
        data_task_id: action.payload.data,
      };
    default:
      return state;
  }
};
