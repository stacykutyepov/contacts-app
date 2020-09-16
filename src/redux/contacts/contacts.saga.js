import { takeLatest, call, put, all } from 'redux-saga/effects';
import { setContactsFailure, setContactsSuccess } from './contacts.actions';

import ContactsTypes from './contacts.types';

export function* fetchContactsAsync() {
    console.log('I am fired')
    try {
        const result = yield fetch('https://randomuser.me/api/?results=500')
        const data = yield result.json()
        yield put(setContactsSuccess(data))

    } catch (error) {
        yield put(setContactsFailure(error))
    }
}

export function* fetchContactsStart() {
    console.log('I am here')
    yield takeLatest(ContactsTypes.FETCH_CONTACTS_START, fetchContactsAsync)
}

export function* contactsSagas() {
    yield all([call(fetchContactsStart)])
}