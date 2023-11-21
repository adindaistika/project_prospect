import apiClient from "../../../helper/apiClient";
import types from "./tutorial.type";

export const getTutorial = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/tutorial`);
    dispatch({
      type: types.DATA_TUTORIAL,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getTutorialById = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/tutorial/${payload.id}`);

    dispatch({
      type: types.DATA_TUTORIAL_ID,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const postTutorial = (payload) => async () => {
  try {
    let response = await apiClient().post(`/tutorial`, payload);
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const putTutorial = (payload) => async () => {
  try {
    let response = await apiClient().put(
      `/tutorial/${payload.category_id}`,
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

export const deleteTutorialById = (payload) => async () => {
  try {
    let response = await apiClient().delete(`/tutorial/${payload.id}`);

    return response?.data.status;
  } catch (err) {
    throw err;
  }
};
