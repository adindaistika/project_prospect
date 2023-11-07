import types from "./messagetemplate.type";
import apiClient from "../../../helper/apiClient";

export const getMessagetemplate = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/message-template`);
    dispatch({
      type: types.DATA_MESSAGETEMPLATE,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getMessagetemplateById = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/message-template/${payload.id}`);
    dispatch({
      type: types.DATA_MESSAGETEMPLATE,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const postMessagetemplate = (payload) => async () => {
  try {
    let response = await apiClient().post(
      `/message-template?title=${payload.title}&message=${payload.message}`,
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

export const putMessagetemplate = (payload) => async () => {
  try {
    let response = await apiClient().put(
      `/message-template/${payload.id}`,
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
