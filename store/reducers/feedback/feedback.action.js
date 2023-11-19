import types from "./feedback.type";
import apiClient from "../../../helper/apiClient";

export const getFeedback = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/feedback`);
    dispatch({
      type: types.DATA_FEEDBACK,
      payload: response?.data.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getFeedbackById = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/feedback/${payload.id}`);
    dispatch({
      type: types.DATA_EVENT_ID,
      payload: response?.data.data,
    });
  } catch (err) {
    throw err;
  }
};

export const putFeedback = (payload) => async () => {
  try {
    let response = await apiClient().put(`/feedback/${payload.id}`, payload, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const postFeedback = (payload) => async () => {
  try {
    let response = await apiClient().post(`/feedback`, payload, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const deleteFeedbackById = (payload) => async () => {
  try {
    let response = await apiClient().delete(`/feedback/${payload.id}`);
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};
