import types from "./messagetemplate.type";
import apiClient from "../../../helper/apiClient";

export const getMessagetemplate = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/message-template`);
    dispatch({
      type: types.DATA_MESSAGETEMPLATE,
      payload: response?.data.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getCountAttachment = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/count-attachment/${payload}`);
    dispatch({
      type: types.DATA_FILEATTACHMENT,
      payload: response?.data.attachmentCounts,
    });
  } catch (err) {
    throw err;
  }
};

export const getMessagetemplateById = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/message-template/${payload}`);
    dispatch({
      type: types.DATA_MESSAGETEMPLATEID,
      payload: response?.data.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getMessage = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/message`);
    dispatch({
      type: types.DATA_MESSAGE,
      payload: response?.data.data,
    });
  } catch (err) {
    throw err;
  }
};

export const postMessagetemplate = (payload) => async () => {
  try {
    let response = await apiClient().post(`/message-template`, payload, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    return response?.data.data;
  } catch (err) {
    throw err;
  }
};

export const postContactMessage = (payload) => async () => {
  try {
    let response = await apiClient().post(`/message`, payload, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    return response?.data.data;
  } catch (err) {
    throw err;
  }
};

export const putMessagetemplate = (payload) => async () => {
  try {
    let response = await apiClient().post(
      `/message-template/${payload.id}`,
      { _method: "PUT", ...payload },
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

export const deleteMessagetemplate = (payload) => async () => {
  try {
    let response = await apiClient().delete(`/message-template/${payload}`);
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};
