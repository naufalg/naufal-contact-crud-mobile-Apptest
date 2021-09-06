import {combineReducers} from 'redux';

import contactsReducer from './contacts.reducer';

const reducer = combineReducers({
  contacts: contactsReducer,
});

export default reducer;
