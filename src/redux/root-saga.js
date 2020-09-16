import { all, call } from 'redux-saga/effects';

import { contactsSagas } from './contacts/contacts.saga';


export default function* rootSaga() {
    // all - allows to take different sagas concurrently
    yield all([call(contactsSagas)]);
}