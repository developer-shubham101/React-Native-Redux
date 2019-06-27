// full code here --> https://github.com/bizz84/redux-navigation-color-picker

import {
    API_FAIL,
    API_LOADING,
    API_RELOAD,
    API_SUCCEED,
} from '../constants/actionTypes';
import { getNotifications } from '../lib/notificationService';


const notificationsLoading = () => ({ type: API_LOADING });
const notificationsSucceed = payload => ({
    type: API_SUCCEED,
    payload,
});
const notificationsError = payload => ({ type: API_FAIL, payload });
const notificationsReload = payload => ({
    type: API_RELOAD,
    payload,
}); 


export const profileFetch = () => async (dispatchEvent, getState) => {
    console.log("profileFetch");
    dispatchEvent(notificationsLoading());
    try {
        console.log("try");
        const res = await getNotifications( );
        console.log("getNotifications ");
        dispatchEvent(notificationsSucceed(res));
    } catch (e) {
        dispatchEvent(notificationsError(e));
    }
};
 