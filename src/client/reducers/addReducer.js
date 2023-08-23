import { CREATE_TASKS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_TASKS:
        return [...state, action.payload]; // Add the new task to the state
    default:
        return state;
  }
};