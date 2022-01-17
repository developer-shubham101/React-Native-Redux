import React from 'react';
import {
	TouchableOpacity as TouchableOpacityBase,
	Platform
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity as TouchableOpacityGesture } from 'react-native-gesture-handler';
const TouchableOpacityView = ({
	children,
	isGusture,
	...props
}) => {
	const isIos = Platform.OS === 'ios';
	// console.log("Platform.OS => ", isIos);
	if (isGusture && !isIos) {
		return <TouchableOpacityGesture
			{...props} >
			{children}
		</TouchableOpacityGesture>
	} else {
		return <TouchableOpacityBase
			{...props} >
			{children}
		</TouchableOpacityBase>
	}
	/* if (isGusture) {
		return <TouchableOpacityGesture
			{...props} >
			{children}
		</TouchableOpacityGesture>
	} else {
		return <TouchableOpacityBase
			{...props} >
			{children}
		</TouchableOpacityBase>
	} */
};


TouchableOpacityView.propTypes = {
	// children: PropTypes.string.isRequired,
	isGusture: PropTypes.bool.isRequired,
};

TouchableOpacityView.defaultProps = {
	isGusture: false
};

export { TouchableOpacityView };
