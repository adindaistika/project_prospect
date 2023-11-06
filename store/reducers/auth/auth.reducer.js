import types from './auth.type'
import initialState from './auth.state'
import { encrypt_data, setCookie, eraseCookie } from '../../../helper/helper';

export const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_DATA:
            setCookie('access_token', action.payload.access_token);
            return {
                ...state,
                token: action.payload.token
            };
        case types.LOGOUT_USER:
            localStorage.clear();
            eraseCookie('access_token');
        default:
            return state;
    }
}
