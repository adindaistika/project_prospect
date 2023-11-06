import apiClient from "../../../helper/apiClient";
import types from './contact.type';

export const getContact = (payload) => async (dispatch) => {
    try {
        let response = await apiClient().get(`/contact?perPage=5`);
        dispatch({
            type: types.DATA_CONTACT,
            payload: response?.data
        })
    } catch (err) {
        throw err
    }
}

export const addContact = (payload) => async (dispatch) => {
    try {
        let response = await apiClient().post(`/contact`, payload);
        return response?.data.data
    } catch (err) {
        throw err;
    }
}
