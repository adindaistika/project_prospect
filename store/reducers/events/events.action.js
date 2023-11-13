import types from "./events.type";
import apiClient from "../../../helper/apiClient";

export const getEvent = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/event?page=1`);
    dispatch({
      type: types.DATA_EVENT,
      payload: response?.data.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getEventById = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/event/${payload.id}`);
    dispatch({
      type: types.DATA_EVENT,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const putEvent = (payload) => async () => {
  try {
    let response = await apiClient().put(`/event`, payload, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const postEvent = (payload) => async () => {
  try {
    let response = await apiClient().post(`/event`, payload, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const deleteEventById = (payload) => async () => {
  try {
    let response = await apiClient().delete(`/event/${payload.id}`);
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};