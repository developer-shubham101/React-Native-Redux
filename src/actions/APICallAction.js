import {
    API_FAIL,
    API_LOADING,
    API_RELOAD,
    API_SUCCEED,
} from '../constants/actionTypes';
import { fetchDataFromApi } from '../lib/apiService';
 
const apiLoading = () => ({ type: API_LOADING });
const apiSucceed = payload => ({
    type: API_SUCCEED,
    payload,
});
const apiError = payload => ({ type: API_FAIL, payload });
const apiReload = payload => ({
    type: API_RELOAD,
    payload,
}); 


export const userFetch = () => async (dispatchEvent, getState) => {
    console.log("profileFetch");
    dispatchEvent(apiLoading());
    try {
        console.log("try");
        const res = await fetchDataFromApi( );
        console.log("getNotifications ");
        dispatchEvent(apiSucceed(res));
    } catch (e) {
        dispatchEvent(apiError(e));
    }
};
 