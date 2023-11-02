import { combineReducers } from 'redux';
import { authReducers } from './auth/auth.reducer';
import { eventReducers } from './events/events.reducer';
export default combineReducers({
    auth: authReducers,
    event: eventReducers
})