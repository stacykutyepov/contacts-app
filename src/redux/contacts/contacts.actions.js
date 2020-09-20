import ContactsTypes from './contacts.types';

export const fetchContactsStart = () => ({
    type: ContactsTypes.FETCH_CONTACTS_START
})

export const setContactsSuccess = contacts => ({
    type: ContactsTypes.SET_CONTACTS_SUCCESS, payload: contacts
})

export const setContactsFailure = errorMessage => ({
    type: ContactsTypes.SET_CONTACTS_FAILURE, payload: errorMessage
})

export const filterByData = (filterType) => ({
    type: ContactsTypes.FILTER_BY_DATA,
    payload: filterType
})

export const addFilter = (filter) => ({
    type: ContactsTypes.ADD_FILTER,
    payload: filter
})

export const deleteFilter = (filter) => ({
    type: ContactsTypes.DELETE_FILTER,
    payload: filter
})

export const deleteAllFilters = () => ({
    type: ContactsTypes.DELETE_ALL_FILTERS
})