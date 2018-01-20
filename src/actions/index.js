import axios from 'axios';
import { FETCH_POST, CREATE_POST, FETCH_SINGLE_POST, DELETE_POST } from './types';
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=123456"; //key could be anything, just need tobe unique

export const fetchPost = () => {
   const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

   return {
      type: FETCH_POST,
      payload: request
   }
};

export const createPost = (values, callback) => {
   const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
   .then(() => callback());
   //Create a promise: initiate post request => then execute the callback function

   return {
      type: CREATE_POST,
      payload: request
   }
};

export const fetchSinglePost = id => {
   const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
   return {
      type: FETCH_SINGLE_POST,
      payload: request
   }
};

export const deletePost = (id, callback) => {
   const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => callback());
   return {
      type: DELETE_POST,
      payload: request
   }
};