import {
	COLOR_CHANGED
} from '../constants/actionTypes';



const ColorReducer = (state = {}, action) => {
	console.log("ColorReducer")
	console.log(action)
	console.log(state)
	switch (action.type) {
		case COLOR_CHANGED:
			return { ...state, colorName: action.payload.colorName };
		default:
			return state;
	}
};

export default ColorReducer;