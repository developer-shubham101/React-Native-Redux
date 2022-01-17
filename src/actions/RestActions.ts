import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';
import { appOperation } from '../appOperation';
import { appOptions } from '../config/appOptions';
 
import { logError } from '../helper/logger';
import { USER_TOKEN_KEY } from '../helper/constants';

export const initMagento = () => {
	appOperation.setOptions(appOptions);

	return async (dispatch) => {
		try {
			appOperation.init();
			// dispatch({ type: APP_INIT, payload: appOperation });
			// const storeConfig = await appOperation.admin.getStoreConfig();
			// dispatch({ type: APP_STORE_CONFIG, payload: storeConfig });
			const customerToken = await AsyncStorage.getItem(USER_TOKEN_KEY);
			appOperation.setCustomerToken(customerToken);
			// getCurrency(dispatch);
		} catch (error) {
			logError(error);
			// dispatch({ type: APP_INIT_ERROR, payload: { errorMessage: error.message } });
		}
	};
};
 