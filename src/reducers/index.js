import {combineReducers} from 'redux';
import solarDataReducer from './solarDataReducer';

export default combineReducers({
  solarData: solarDataReducer
});
