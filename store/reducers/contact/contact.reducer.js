import types from './contact.type'
import initialState from './contact.state'

export const contactReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.DATA_CONTACT:
            return {
                ...state,
                data_contact: action.payload.data,
                data_contact_meta: action.payload.meta
            };
        default:
            return state;
    }
}