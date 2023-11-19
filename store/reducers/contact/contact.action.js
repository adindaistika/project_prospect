import apiClient from "../../../helper/apiClient";
import types from "./contact.type";

export const getContactCategory = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/category?page=${payload}`);
    dispatch({
      type: types.DATA_CONTACT_CATEGORY,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};
export const getContact = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(
      `/contact?perPage=10&page=${payload.page}`
    );
    dispatch({
      type: types.DATA_CONTACT,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getContactById = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/contact/${payload}`);

    dispatch({
      type: types.DETAIL_CONTACT,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const postContact = (payload) => async () => {
  try {
    let response = await apiClient().post(`/contact`, payload);
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const updateContact = (payload) => async () => {
  try {
    let response = await apiClient().put(
      `/contact/${payload.id}`,
      payload.form
    );
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const deleteContactById = (payload) => async () => {
  try {
    let response = await apiClient().delete(`/contact/${payload.id}`);

    return response?.data.status;
  } catch (err) {
    throw err;
  }
};
