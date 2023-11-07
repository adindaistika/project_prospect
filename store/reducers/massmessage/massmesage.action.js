import types from "./massmessage.type";
import apiClient from "../../../helper/apiClient";

export const getMassmessage = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/message-template`);
    dispatch({
      type: types.DATA_MASSMESSAGE,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getMassmessageById = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/message-template/${payload.id}`);
    dispatch({
      type: types.DATA_MASSMESSAGE,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const postMassmessage = (payload) => async () => {
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

export const putMassmessage = (payload) => async () => {
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
