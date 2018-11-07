import { combineReducers } from 'redux';
import DictionaryReducer from './dictionary.R';

const rootReducer = combineReducers({
  dictionary: DictionaryReducer,
});

export default rootReducer;