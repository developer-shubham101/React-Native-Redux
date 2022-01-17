import AsyncStorage from '@react-native-community/async-storage';
import {APP_LOGIN_SUCCESS} from '../actions/types'
import { USER_TOKEN_KEY } from '../helper/constants';

 
export const auth = (userData) => async (dispatch) => {
	console.log("auth", userData);
	// console.log("auth", getState().customerAuth.tmpUser.mobile);


	try {
	// 	dispatch({ type: APP_SHOW_RESET_PASSWORD, payload: false });
	// 	dispatch({ type: APP_AUTH_LOADING, payload: true });
	// 	const response = await appOperation.guest.auth(userData);
	// 	console.log('token');
	// 	// appOperation.setCustomerToken(response);
	// 	if (response.status == 200) {
	// 		authSuccess(dispatch, response.data.token, response.data);
			// dispatch({ type: APP_LOGIN_SUCCESS });
		// } else if (response.status == 400) {
			const customerToken = await AsyncStorage.setItem(USER_TOKEN_KEY, 'user logged in');

		// 	dispatch({ type: APP_SHOW_RESET_PASSWORD, payload: true });
		// 	authFail(dispatch, response.message);
		// } else if (response.status == 402) {
		// 	// console.log("auth", response.status);
		// 	// console.log("auth", response.data.failedCount);

		// 	authFail(dispatch, "Auth Faild");
		// } else {
		// 	dispatch({ type: APP_SHOW_RESET_PASSWORD, payload: true });

		// 	authFail(dispatch, response.message);
		// }
	} catch (e) {
		logError(e);
		// authFail(dispatch, e.message);
	}
};

 
export const logout = () => async (dispatch) => {
// 	dispatch({ type: APP_AUTH, payload: '' });
// 	dispatch({ type: APP_LOGOUT });


// 	try {
// 		await AsyncStorage.setItem(CART_DATA, "");
// 	} catch (e) {
// 		logError(e);
// 	}


// 	// NavigationService.navigate(NAVIGATION_COMMUNITY_SEARCH_PATH);
// 	NavigationService.navigate(NAVIGATION_LOGIN_PATH);
	AsyncStorage.setItem(USER_TOKEN_KEY, '');
// 	AsyncStorage.setItem(USER_DETAILS_KEY, '');
};
