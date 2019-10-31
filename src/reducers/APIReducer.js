import {
    API_FAIL,
    API_LOADING,
    API_RELOAD,
    API_SUCCEED,
} from '../constants/actionTypes';
import { LOADING, ERROR, SUCCESS } from '../constants/misc'; 

export default function apiReducer(state = {}, action) {
    console.log("Inside apiReducer.js")
    console.log(action)
    switch (action.type) {
        case API_FAIL:
            return Object.assign({}, state, {
                status: ERROR,
                error: action.payload.errMessage,
            });
        case API_LOADING:
            return Object.assign({}, state, { status: LOADING });
        case API_RELOAD:
        case API_SUCCEED:
             
            return Object.assign({}, state, { status: SUCCESS, value: action.payload });
        default:
            return state;
    }
}
