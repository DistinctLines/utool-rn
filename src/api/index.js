import axios from 'axios';
import { API_ENDPOINT, API_USER_ENDPOINT } from './config';

export const fetchItems = id => {
 return axios.get('http://10.0.2.2:8080/user/explore')
  .then(response => {
    console.log('hello world');
   return response;
  }).catch(err => {
    console.log('ERRORRRORR!!')
   return err;
  });
}