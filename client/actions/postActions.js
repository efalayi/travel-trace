import axios from 'axios';
import { POST_SUCCESS, POST_FAILURE } from '../constants/constants';

const postSuccess = post => (
  {
    type: POST_SUCCESS,
    post
  }
);

const postFailure= error => (
  {
    type: POST_FAILURE,
    error
  }
);


/**
 * @param {any} newpost 
 * @returns {object} action
 */
export default function savePostAction(newpost) {
  return dispatch => (
    axios.post('/api/v1/posts', newpost)
  ).then((res) => {
    dispatch(postSuccess(res.data.story))
  }, ({ response }) => {
    console.log(response);
  });
}