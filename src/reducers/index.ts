import { combineReducers } from 'redux';
import CustomerAuthReducer from './CustomerAuthReducer';
import AppReducer from './AppReducer';
import BibleReducer from './BibleReducer';

export default combineReducers({
  customerAuth: CustomerAuthReducer,
  magento: AppReducer,
  bible: BibleReducer,
});
