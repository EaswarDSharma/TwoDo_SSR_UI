import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tasksReducer from './tasksReducer';
import addReducer from './addReducer';
import doneReducer from './doneReducer';
export default combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  add: addReducer,
  done: doneReducer
});
