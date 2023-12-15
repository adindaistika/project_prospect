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
      payload: response?.data.data.upcomingEvents,
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

export const editEventComming = (payload) => async () => {
  try {
    let response = await apiClient().put(
      `/dashboard/up-coming-event/${payload.id}`,
      payload
    );
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const deleteEventComming = (payload) => async () => {
  try {
    let response = await apiClient().delete(
      `/dashboard/up-coming-event/${payload.id}`
    );
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};
