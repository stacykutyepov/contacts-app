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
