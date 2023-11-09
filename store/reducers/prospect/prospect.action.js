import apiClient from "../../../helper/apiClient";
import types from "./prospect.type";

export const getProspect = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/prospect`);
    dispatch({
      type: types.DATA_PROSPECT,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getProspectById = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/prospect/${payload.id}`);

    dispatch({
      type: types.DATA_PROSPECT,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const postProspect = (payload) => async () => {
  try {
    let response = await apiClient().post(`/prospect`, payload);
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const putProspect = (payload) => async () => {
  try {
    let response = await apiClient().put(
      `/prospect/${payload.category_id}`,
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

export const deleteProspectById = (payload) => async () => {
  try {
    let response = await apiClient().delete(`/prospect/${payload.id}`);

    return response?.data.status;
  } catch (err) {
    throw err;
  }
};
