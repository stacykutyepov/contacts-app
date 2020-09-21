import { takeLatest, call, put, all } from 'redux-saga/effects';
import { setContactsFailure, setContactsSuccess } from './contacts.actions';
import { randomIntegerInRange } from '../../utils/random'

import ContactsTypes from './contacts.types';

export function* fetchContactsAsync() {
    try {
        const result = yield fetch(`https://randomuser.me/api/?results=${randomIntegerInRange(100, 1000)}`)
        const data = yield result.json();
        const modifiedData = data.results.map((contact, index) => {
            return {
                ...contact,
                contactId: index,
                fullName: `${contact.name.first} ${contact.name.last}`,
                locationData: `${contact.location.street.number}, ${contact.location.street.name},
                ${contact.location.city}, ${contact.location.state}, ${contact.location.postcode}`,
            }
        })

        yield put(setContactsSuccess(modifiedData))

    } catch (error) {
        yield put(setContactsFailure(error))
    }
}

export function* fetchContactsStart() {
    console.log('I am here');
    yield takeLatest(ContactsTypes.FETCH_CONTACTS_START, fetchContactsAsync)
}

export function* contactsSagas() {
    yield all([call(fetchContactsStart)])
}