import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts.reducer';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["contacts"]
}

const rootReducer = combineReducers({
    contacts: contactsReducer
})

export default persistReducer(persistConfig, rootReducer);