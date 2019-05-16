import {
    NOTIFICATIONS_FAIL,
    NOTIFICATIONS_LOADING,
    NOTIFICATIONS_RELOAD,
    NOTIFICATIONS_SUCCEED,
} from '../constants/actionTypes';
import { LOADING, ERROR, SUCCESS } from '../constants/misc';
import { sortByLastUpdated } from '../shared_lib/misc';

export default function apiReducer(state = {}, action) {
    console.log("Inside notification.js")
    console.log(action)
    switch (action.type) {
        case NOTIFICATIONS_FAIL:
            return Object.assign({}, state, {
                status: ERROR,
                error: action.payload.errMessage,
            });
        case NOTIFICATIONS_LOADING:
            return Object.assign({}, state, { status: LOADING });
        case NOTIFICATIONS_RELOAD:
        case NOTIFICATIONS_SUCCEED:
             
            return Object.assign({}, state, { status: SUCCESS, value: "hhfhfghf" });
        default:
            return state;
    }
}
