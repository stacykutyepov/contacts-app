import ContactsTypes from './contacts.types';
import { filterByData, deleteFilter } from './contacts.utils';

const INITIAL_STATE = {
    contacts: [],
    error: null,
    isFetching: false,
    visibilityFilter: {},
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
        case ContactsTypes.ADD_FILTER:
            return {
                ...state, visibilityFilter: { ...state.visibilityFilter, ...action.payload }
            }
        case ContactsTypes.DELETE_ALL_FILTERS:
            return {
                ...state, visibilityFilter: {}
            }
        case ContactsTypes.DELETE_FILTER:
            return {
                ...state, visibilityFilter: deleteFilter(state.visibilityFilter, action.payload)
            }
        default:
            return state;
    }
}

export default contactsReducer;