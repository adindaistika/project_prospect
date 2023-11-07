import types from './events.type';
import apiClient from '../../../helper/apiClient'

export const getEvent = (payload) => async (dispatch) => {
    try {
        let response = await apiClient().get(`/event?page=1`);
        dispatch({
            type: types.DATA_EVENT,
            payload: response?.data
        })
    } catch (err) {
        throw err
    }
}

export const postEvent = (payload) => async () => {
    try {
        let response = await apiClient().post(`/event`, payload);
        return response?.data.status;
    } catch (err) {
        throw err;
    }
};