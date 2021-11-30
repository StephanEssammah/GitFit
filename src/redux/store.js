import { combineReducers, createStore } from 'redux';
import nameReducer from './name/name.reducer'


const rootReducer = combineReducers({ state: nameReducer })
const store = createStore(rootReducer)

export default store;