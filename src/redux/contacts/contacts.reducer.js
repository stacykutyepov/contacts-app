import ContactsTypes from './contacts.types'

const INITIAL_STATE = {
    contacts: [
        {
            name: 'Peter'
        },
    ],
    error: null,
    isFetching: false,
}

const contactsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ContactsTypes.FETCH_CONTACTS_START:
            return {
                ...state, isFetching: true,
            }
        case ContactsTypes.SET_CONTACTS_SUCCESS:
            return { ...state, contacts: action.payload, error: null }
        case ContactsTypes.SET_CONTACTS_FAILURE:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default contactsReducer;