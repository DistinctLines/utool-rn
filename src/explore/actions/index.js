import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ADD_ITEMS
} from './types';

import { fetchItems } from '../../api/index';

export const fetchItemsSuccess = (payload) => {
  console.log('FETCH ITEMS SUCCESS!!');
 return {
  type: FETCH_ITEMS_SUCCESS,
  payload
 };
}

export const fetchAddItems = (id, payload) => {
 return {
  type: FETCH_ADD_ITEMS,
  id,
  payload
 };
}

export const fetchItemRequest = () => {
  return {
    type: FETCH_ITEMS
  };
}

export const fetchItemsFailure = () => {
  return {
    type: FETCH_ITEMS_FAILURE
  };
}

export const fetchRandomItems = () => {

  console.log('calling fetch method!');

  return dispatch => {
    dispatch(fetchItemRequest());
    return fetchItems()
      .then(items => { 
        console.log(items); 
        dispatch(fetchItemsSuccess(items));
      }).catch((err) => {
        console.log(err);
        dispatch(fetchItemsFailure()) 
      });
  }
}