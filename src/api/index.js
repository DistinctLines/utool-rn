import axios from 'axios';
import { API_ENDPOINT, API_USER_ENDPOINT } from './config';

export const fetchItems = id => {
 return axios.get(`${API_ENDPOINT}${API_USER_ENDPOINT}/explore`)
  .then(response => {
   return response;
  }).catch(err => {
   return err;
  });
}