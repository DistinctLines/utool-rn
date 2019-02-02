import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ADD_ITEMS
} from './types';

export function fetchItemsSuccess(id, payload) {
 return {
  type: FETCH_ITEMS_SUCCESS,
  id,
  payload
 };
}

export function fetchAddItems = (id, payload) => {
 return {
  type: FETCH_ADD_ITEMS,
  id,
  payload
 };
}

export const fetchItems = item => {
 return dispatch => {

 }
}