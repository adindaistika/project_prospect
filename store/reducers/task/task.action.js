import apiClient from "../../../helper/apiClient";
import types from "./task.type";

export const getTask = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/task`);
    dispatch({
      type: types.DATA_TASK,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getTaskById = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/task/${payload.id}`);

    dispatch({
      type: types.DATA_TASK,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const postTask = (payload) => async () => {
  try {
    let response = await apiClient().post(`/task`, payload);
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const putTask = (payload) => async () => {
  try {
    let response = await apiClient().put(
      `/task/${payload.category_id}`,
      payload,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    );
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const deleteTaskById = (payload) => async () => {
  try {
    let response = await apiClient().delete(`/task/${payload.id}`);

    return response?.data.status;
  } catch (err) {
    throw err;
  }
};
