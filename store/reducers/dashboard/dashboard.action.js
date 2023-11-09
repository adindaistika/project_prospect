import apiClient from "../../../helper/apiClient";
import types from "./dashboard.type";

export const getTaskTerupdate = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/dashboard/up-daily-task`);
    dispatch({
      type: types.DATA_EVENT_UPDATE,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getEventComming = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/dashboard/up-coming-event`);
    dispatch({
      type: types.DATA_EVENT_COMMING,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getGoal = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/dashboard/goal`);
    dispatch({
      type: types.DATA_EVENT_GOAL,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};
