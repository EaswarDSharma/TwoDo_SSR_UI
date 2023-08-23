import { FETCH_DONE } from '../actions';

export default (state = [], action) => {  
  switch (action.type) {
    case FETCH_DONE:
      return action.payload;
    default:
      return state;
  }
}
