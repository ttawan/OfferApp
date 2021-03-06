/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from 'redux';

import homeReducer from 'containers/HomeContainer/reducer';

export default combineReducers({
  home: homeReducer,
});
