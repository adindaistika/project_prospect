import types from './auth.type';
import apiClient from '../../../helper/apiClient'

export const loginUser = (payload) => async (dispatch) => {
    try {
        let response = await apiClient().post('/login', payload);
        // dispatch({
        //     type: types.LOGIN_DATA,
        //     payload: response.data.data
        // })
        console.log(response.data.data)
    } catch (err) {
        throw err;
    }
}