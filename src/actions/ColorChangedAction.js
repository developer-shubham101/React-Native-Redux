// full code here --> https://github.com/bizz84/redux-navigation-color-picker
export const colorChanged = (type) => {
	return {
		type: 'COLOR_CHANGED',
		payload: type
	};
};