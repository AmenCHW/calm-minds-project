import { combineReducers } from 'redux';
import peregraph from './reducer';

const allReducer = combineReducers({
  peregraphes: peregraph,
});

export default allReducer;
