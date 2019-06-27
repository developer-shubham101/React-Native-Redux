import {
    COLOR_CHANGED
} from '../constants/actionTypes';


export const colorChanged = (type) => {
    return {
        type: COLOR_CHANGED,
        payload: type
    };
}; 