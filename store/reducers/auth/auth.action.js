import types from "./auth.type";
import apiClient from "../../../helper/apiClient";

export const loginUser = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().post("/login", payload);
    dispatch({
      type: types.LOGIN_DATA,
      payload: response.data.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getUserById = (payload) => async (dispatch) => {
  try {
    let response = await apiClient().get(`/user/${payload.id}`);
    dispatch({
      type: types.USER_DATA,
      payload: response.data.data,
    });
  } catch (err) {
    throw err;
  }
};

export const editUser = (payload) => async () => {
  try {
    let response = await apiClient().post(
      `/user/${payload.id}`,
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

export const registrationUser = (payload) => async () => {
  try {
    let response = await apiClient().post("/register", payload);
    return response.data.message;
  } catch (err) {
    throw err;
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await apiClient().post("/logout");
    dispatch({
      type: types.LOGOUT_USER,
    });
  } catch (err) {
    throw err;
  }
};
