import {
	APP_PASSWORD_RESET_LOADING,
	APP_PASSWORD_RESET_SUCCESS,
	APP_PASSWORD_RESET_ERROR,
	APP_CREATE_CUSTOMER_LOADING,
	APP_CREATE_CUSTOMER_SUCCESS,
	APP_CREATE_CUSTOMER_ERROR,
	APP_AUTH_LOADING,
	APP_AUTH,
	APP_AUTH_ERROR,
	APP_OTP_SENT_SUCCESS,
	APP_MOBILE_VERIFY_LOADING,
	APP_MOBILE_VERIFY_ERROR,
	APP_OTP_LOADING,
	UI_AUTH_UPDATE_LOGIN_UI,
	UI_AUTH_UPDATE_NAME,
	APP_TEMP_USER,
	APP_PASSWORD_LIST,
	APP_OTP_DATA,
	APP_OTP_ERROR,
	APP_OTP_SUCCESS,
	APP_SHOW_RESET_PASSWORD
} from '../actions/types';

const INITIAL_STATE = {
	customer: null,
	token: null,
	/**
	 * Login/Signin Screen
	 */
	error: null,
	success: null,
	loading: false,
	/**
	 * Password Reset Screen
	 */
	resetLoading: false,
	resetPasswordErrorMessage: null,
	resetPasswordSuccessMessage: null,



	varifyMobileLoading: false,
	varifyMobileErrorMessage: null,
	varifyMobileSuccessMessage: null,


	otpLoading: null,
	otpError: null,
	otpSuccess: null,


	enterUserName: "sc2",
	enterPassword: "SERver123",
	enterName: "",


	tmpUser: null,
	passwordList: [],

	otpData: null,

	showForgot: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case APP_PASSWORD_RESET_LOADING:
			return {
				...state,
				resetLoading: action.payload,
				resetPasswordSuccessMessage: null,
				resetPasswordErrorMessage: null,
			};
		case APP_PASSWORD_RESET_SUCCESS:
			return {
				...state,
				resetLoading: false,
				resetPasswordErrorMessage: null,
				resetPasswordSuccessMessage: action.payload,
			};
		case APP_PASSWORD_RESET_ERROR:
			return {
				...state,
				resetLoading: false,
				resetPasswordErrorMessage: action.payload.errorMessage,
			};

		case APP_CREATE_CUSTOMER_LOADING:
			return {
				...state,
				loading: action.payload,
				error: null,
				success: null,
			};

		case APP_OTP_LOADING:
			return {
				...state,
				otpLoading: action.payload,
				otpError: null,
				otpSuccess: null,
			};
		case APP_OTP_ERROR:
			return {
				...state,
				otpLoading: false,
				otpError: action.payload,
				otpSuccess: null,
			};
		case APP_OTP_SUCCESS:
			return {
				...state,
				otpLoading: false,
				otpError: null,
				otpSuccess: action.payload,
			};

		case APP_CREATE_CUSTOMER_SUCCESS:
			return {
				...state,
				customer: action.payload,
			};

		case UI_AUTH_UPDATE_LOGIN_UI:
			return {
				...state,
				[action.payload.key]: action.payload.value,
			};

		case UI_AUTH_UPDATE_NAME:
			return {
				...state,
				enterName: action.payload,
			};

		case APP_MOBILE_VERIFY_LOADING:
			return {
				...state,
				varifyMobileLoading: action.payload,
				varifyMobileErrorMessage: null,
				varifyMobileSuccessMessage: null,
			};
		case APP_TEMP_USER:
			return {
				...state,
				tmpUser: action.payload,
			};
		case APP_OTP_DATA:
			return {
				...state,
				otpData: action.payload,
			};

		case APP_PASSWORD_LIST:
			return {
				...state,
				passwordList: action.payload,
			};

		/* case APP_CREATE_CUSTOMER_SUCCESS:
			return {
				...state,
				customer: action.payload,
			}; */
		case APP_MOBILE_VERIFY_ERROR:
			return {
				...state,
				varifyMobileLoading: false,
				varifyMobileErrorMessage: action.payload,
				varifyMobileSuccessMessage: null,
			};


		case APP_AUTH:
			return { ...state, token: action.payload };
		case APP_AUTH_ERROR:
			return { ...state, error: action.payload };
		case APP_AUTH_LOADING: {
			if (action.payload) {
				return {
					...state,
					loading: action.payload,
					error: null,
					success: null,
				};
			}
			return { ...state, loading: action.payload };
		}

		case APP_SHOW_RESET_PASSWORD:
			return { ...state, showForgot: action.payload };

		/* case APP_OTP_SENT_SUCCESS:
			return { ...state, error: null, success: null, is_register: action.payload.is_register}; */

		default:
			return state;
	}
};
