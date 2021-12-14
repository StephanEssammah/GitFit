import { combineReducers, createStore } from 'redux';
import userReducer from './name/user.reducer'
import newProgramReducer from './name/newProgram.reducer'

const rootReducer = combineReducers({ user: userReducer, newProgram: newProgramReducer })
const store = createStore(rootReducer)

export default store;