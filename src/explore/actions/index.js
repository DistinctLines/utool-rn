import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ADD_ITEMS
} from './types';

import { fetchItems } from '../api';

export const fetchItemsSuccess = (id, payload) => {
 return {
  type: FETCH_ITEMS_SUCCESS,
  id,
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

export const fetchItems = item => {
  return dispatch => {
    dispatch(fetchItemRequest());
    return fetchItems()
      .then(items => { 
        console.log(items); 
        dispatch(fetchItemsSuccess(item, items));
      }).catch(() => dispatch(fetchItemsFailure()));
  }
}