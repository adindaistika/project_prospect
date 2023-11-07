import { combineReducers } from 'redux';
import { authReducers } from './auth/auth.reducer';
import { eventReducers } from './events/events.reducer';
import { contactReducers } from './contact/contact.reducer';
import { messagetemplateReducer } from './messagetemplate/messagetemplate.reducer';
export default combineReducers({
    auth: authReducers,
    event: eventReducers,
    contact: contactReducers,
    messagetemplate: messagetemplateReducer,
})