import AsyncStorage from '@react-native-community/async-storage';
import { appOperation } from '../appOperation';
import { initMagento, getCart, setCurrentCustomer } from '../actions';
import { logError } from './logger';
import { USER_TOKEN_KEY, USER_DETAILS_KEY, CART_DATA } from './constants';
import { APP_GET_CART } from '../actions/types';


/* export const onAppStart = async (store) => {
	store.dispatch(initMagento());

	const customerToken = await AsyncStorage.getItem(USER_TOKEN_KEY);
	appOperation.setCustomerToken(customerToken);

	if (customerToken) {
		try {
			const customer = await appOperation.customer.getCurrentCustomer();
			store.dispatch(setCurrentCustomer(customer));
		} catch (error) {
			console.log('onAppStart -> unable to retrieve current customer', error);
			logError(error);
		}
	}
	store.dispatch(getCart());
}; */



export const onAppStart = async (store) => {
	store.dispatch(initMagento());

	const customerToken = await AsyncStorage.getItem(USER_TOKEN_KEY);
	appOperation.setCustomerToken(customerToken);
	// console.log('customerToken' , customerToken);

	const customerDetails = await AsyncStorage.getItem(USER_DETAILS_KEY);

	if (customerDetails) {
		store.dispatch(setCurrentCustomer(JSON.parse(customerDetails)));
	}


	/* if (customerToken) {
		try {
			const customer = await appOperation.customer.getCurrentCustomer();
			store.dispatch(setCurrentCustomer(customer));
		} catch (error) {
			console.log('onAppStart -> unable to retrieve current customer', error);
			logError(error);
		}
	} */
	// store.dispatch(getCart());
};
