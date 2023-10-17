import { combineReducers } from 'redux';
import { authReducers } from './auth/auth.reducer';
export default combineReducers({
    auth:authReducers,
})