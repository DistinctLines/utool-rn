import { combineReducers } from 'redux';

import ExploreReducer from './explore/reducers/ExploreReducer';

const rootReducer = combineReducers({
 explore: ExploreReducer
});

export default rootReducer;