import { combineReducers } from 'redux';
import CustomerAuthReducer from './CustomerAuthReducer';
import AppReducer from './AppReducer';


// import customerOrders from './dis/customerOrders';


export default combineReducers({
	customerAuth: CustomerAuthReducer,
	magento: AppReducer,

	// custOrders: customerOrders,
});
