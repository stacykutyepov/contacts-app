import ContactsTypes from './contacts.types';
import { filterByData } from './contacts.utils';

const INITIAL_STATE = {
    contacts: [],
    error: null,
    isFetching: false,
    visibilityFilter: 'SHOW_ALL',
}

const contactsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ContactsTypes.FETCH_CONTACTS_START:
            return {
                ...state, isFetching: true
            }
        case ContactsTypes.SET_CONTACTS_SUCCESS:
            return {
                ...state, contacts: action.payload, error: null
            }
        case ContactsTypes.SET_CONTACTS_FAILURE:
            return {
                ...state, error: action.payload
            }
        case ContactsTypes.FILTER_BY_DATA:
            return {
                ...state, visibilityFilter: filterByData(action.payload)
            }
        default:
            return state;
    }
}

export default contactsReducer;