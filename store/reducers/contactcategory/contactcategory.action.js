import apiClient from "../../../helper/apiClient";
import types from "./contactcategory.type";

export const getContactCategory = () => async (dispatch) => {
  try {
    let response = await apiClient().get(`/contact-category`);
    dispatch({
      type: types.DATA_CONTACTCATEGORY,
      payload: response?.data.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getContactCategoryById = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/contact-category/${payload.id}`);

    dispatch({
      type: types.DATA_CONTACTCATEGORY,
      payload: response?.data,
    });
  } catch (err) {
    throw err;
  }
};

export const postContactCategory = (payload) => async () => {
  try {
    let response = await apiClient().post(`/contact-category`, payload);
    return response?.data.status;
  } catch (err) {
    throw err;
  }
};

export const putContactCategory = (payload) => async () => {
  try {
    let response = await apiClient().put(
      `/contact-category/${payload.category_id}`,
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

export const deleteContactCategoryById = (payload) => async () => {
  try {
    let response = await apiClient().delete(`/contact-category/${payload.id}`);

    return response?.data.status;
  } catch (err) {
    throw err;
  }
};
