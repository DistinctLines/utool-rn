import { 
 FETCH_ITEMS,
 FETCH_ITEMS_SUCCESS,
 FETCH_ITEMS_FAILURE,
 FETCH_ADD_ITEMS
} from '../../actions/types';

const INITIAL_STATE = {
 isFetching: false,
 items: [],
 ids: []
}; 

export default (state = INITIAL_STATE, action) => {

 switch(action.type) {
  case FETCH_ITEMS: 
   return { ...state, isFetching = true};

  case FETCH_ITEMS_SUCCESS:
   return {
    ...state, 
    items: action.payload,
    isFetching: false
   };

  case FETCH_ITEMS_FAILURE:
   return { ...state, comments: [], isFetching: false};
   
  default:
  return state;
 }
};