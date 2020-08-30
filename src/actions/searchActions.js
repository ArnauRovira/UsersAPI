import { SEARCH_USER, FETCH_USERS, FETCH_USER} from './types';
import axios from 'axios';

export const searchUser = text => dispatch => {
  dispatch({
    type: SEARCH_USER,
    payload: text
  });
};

export const fetchUsers = text => dispatch => {
  axios
  .get(`https://api.github.com/search/users?q=${text}`)
  .then(response =>{
    console.log(response.data);
    dispatch({
      type: FETCH_USERS,
      payload: response.data
    })
  })
  .catch(err => console.log(err));
};

export const fetchUser = id => dispatch => {
  axios
    .get(`https://api.github.com/users/${id}`)
    .then(response =>
      dispatch({
        type: FETCH_USER,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

