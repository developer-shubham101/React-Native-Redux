import React, { useContext } from 'react';
import {
	StyleSheet,
	TouchableOpacity as TouchableOpacityBase,
	ViewPropTypes,
	Platform
} from 'react-native';
import PropTypes from 'prop-types';
import { Text, SEMI_BOLD } from './Text';
import { ThemeContext } from '../../theme';
import { TouchableOpacity as TouchableOpacityGesture } from 'react-native-gesture-handler';
import { TouchableOpacityView } from './TouchableOpacityView';
const Button = ({
	onPress,
	children,
	style,
	disabled,
	buttonColor,
	curved,
	type,
	isGusture,
	buttonTextStyle
}) => {
	const theme = useContext(ThemeContext);
	const { buttonStyle, buttonTitle } = styles;
	/* const isIos = Platform.OS === 'ios';

	if (isGusture && !isIos) {
		return <TouchableOpacityGesture
			onPress={onPress}
			activeOpacity={0.8}
			style={[buttonStyle(theme, disabled, buttonColor, type, curved), style]}
			disabled={disabled}
		>
			<Text weight={SEMI_BOLD} style={[buttonTitle(theme, disabled, type), buttonTextStyle]}>
				{children}
			</Text>
		</TouchableOpacityGesture>
	} else {
		return <TouchableOpacityBase
			onPress={onPress}
			activeOpacity={0.8}
			style={[buttonStyle(theme, disabled, buttonColor, type, curved), style]}
			disabled={disabled}
		>
			<Text weight={SEMI_BOLD} style={[buttonTitle(theme, disabled, type), buttonTextStyle]}>
				{children}
			</Text>
		</TouchableOpacityBase>
	} */
	return <TouchableOpacityView
		isGusture={isGusture}
		onPress={onPress}
		activeOpacity={0.8}
		style={[buttonStyle(theme, disabled, buttonColor, type, curved), style]}
		disabled={disabled}
	>
		<Text weight={SEMI_BOLD} style={[buttonTitle(theme, disabled, type), buttonTextStyle]}>
			{children}
		</Text>
	</TouchableOpacityView>
};

const getButton = (theme, disabled, buttonColor, type, curved) => {
	let style = {
		// width: theme.dimens.defaultButtonWidth,
		height: theme.dimens.defaultButtonHeight,
		justifyContent: 'center',

		// borderRadius: 20,
	};
	/* switch (buttonColor) {
		case "Yellow":
			style["backgroundColor"] = "#FDB54C";
			break;
		case "Red":
			style["backgroundColor"] = "#ff5252";
			break;
		default:
			style["backgroundColor"] = theme.colors.secondary;
	} */

	switch (type) {
		case 1:
			style["backgroundColor"] = disabled ? "#72C793" : theme.colors.secondary;
			break;
		case 2:
			style["backgroundColor"] = theme.colors.white;
			style["borderColor"] = disabled ? theme.colors.disabledDark : theme.colors.secondary;
			style["borderWidth"] = 1;
			break;
		case 3:
			style["backgroundColor"] = "#FF640010";

			break;
		default: {
			style["backgroundColor"] = disabled ? "#72C793" : theme.colors.secondary;
			break
		}
	}


	switch (curved) {
		case "none":
			style["borderRadius"] = 0;
			break;
		case "left":
			style["borderTopLeftRadius"] = 20;
			style["borderBottomLeftRadius"] = 20;
			break;
		case "right":
			style["borderTopRightRadius"] = 20;
			style["borderBottomRightRadius"] = 20;
			break;
		default:
			style["borderRadius"] = 6;
			break;
	}

	return style;
};
const styles = StyleSheet.create({

	buttonStyle: (theme, disabled, buttonColor, type, curved) => ({
		...getButton(theme, disabled, buttonColor, type, curved)

	}),
	buttonTitle: (theme, disabled, type) => ({
		color: disabled ? ((type == 1) ? "#fff" : theme.colors.disabledDark) : (type == 2 || type == 3 ? theme.colors.secondary : theme.colors.white),
		alignSelf: 'center',
		fontSize: 16
	}),
});

Button.propTypes = {
	onPress: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired,
	style: ViewPropTypes.style,
	buttonTextStyle: ViewPropTypes.style,

	disabled: PropTypes.bool,
	isGusture: PropTypes.bool.isRequired,

};

Button.defaultProps = {
	onPress: () => { },
	style: {},
	buttonTextStyle: {},
	type: 1,
	disabled: false,
	isGusture: false
};

export { Button };
