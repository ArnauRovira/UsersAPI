import {
  SEARCH_USER,
  FETCH_USERS,
  FETCH_USER
} from '../actions/types';

const initialState = {
  text: '',
  users: [],
  user: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        text: action.payload
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    
    default:
      return state;
  }
}
