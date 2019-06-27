import {
    COLOR_CHANGED
} from '../constants/actionTypes';


const initialState = {
	colorName: 'RED',
};

const ColorReducer = (state = initialState, action) => {
    console.log("ColorReducer")
    console.log(action)
	switch (action.type) {
		case COLOR_CHANGED:
			return { ...state, colorName: action.payload.colorName };
		default:
			return state;
	}
};

export default ColorReducer;