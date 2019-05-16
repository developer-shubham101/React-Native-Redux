 
// full code here --> https://github.com/bizz84/redux-navigation-color-picker
const initialState = {
	colorName: 'RED',
};

const ColorReducer = (state = initialState, action) => {
    console.log("ColorReducer")
    console.log(action)
	switch (action.type) {
		case 'COLOR_CHANGED':
			return { ...state, colorName: action.payload.colorName };
		default:
			return state;
	}
};

export default ColorReducer;