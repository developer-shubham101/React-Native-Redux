// full code here --> https://github.com/bizz84/redux-navigation-color-picker

import {
    NOTIFICATIONS_FAIL,
    NOTIFICATIONS_LOADING,
    NOTIFICATIONS_RELOAD,
    NOTIFICATIONS_SUCCEED,
} from '../constants/actionTypes';
import { getNotifications } from '../lib/notificationService';


const notificationsLoading = () => ({ type: NOTIFICATIONS_LOADING });
const notificationsSucceed = payload => ({
    type: NOTIFICATIONS_SUCCEED,
    payload,
});
const notificationsError = payload => ({ type: NOTIFICATIONS_FAIL, payload });
const notificationsReload = payload => ({
    type: NOTIFICATIONS_RELOAD,
    payload,
});



// export const profileFetch = () => async (dispatchEvent, getState) => {
//     console.log("sadasdasd");
//     dispatchEvent(notificationsLoading());
//     try {
//         const res = await getNotifications({ identityToken });

//         dispatchEvent(notificationsSucceed(res));
//     } catch (e) {
//         dispatchEvent(notificationsError(e));
//     }
// };


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


// export const profileFetch = () => {
//     console.log("sadasdasd");
//     return {
//         notification: NOTIFICATIONS_SUCCEED,
//         type: NOTIFICATIONS_SUCCEED,
//         payload: ""
//     };
// };
