import React, { useContext } from 'react';
import {
	StyleSheet,
	// TouchableOpacity,
	ViewPropTypes,
	View,
} from 'react-native';
import PropTypes from 'prop-types';
import { Text, SEMI_BOLD } from './Text';
import { ThemeContext } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableOpacityView } from './TouchableOpacityView';

const CartButton = ({
	onPressIncrease,
	onPressDecrease,
	children,
	style,
	disabled,
	buttonColor,
	buttonTextStyle
}) => {
	const theme = useContext(ThemeContext);

	let increaseDisable = false;
	let decreaseDisable = true;

	return (
		<View style={[styles.wrapperStyle(theme), style]}>
			<TouchableOpacityView
				isGusture={true}
				onPress={onPressDecrease}
				activeOpacity={0.8}
				style={[styles.buttonStyle(theme, disabled, buttonColor)]}
				disabled={disabled}
			>
				<Text weight={SEMI_BOLD} style={[styles.buttonTitle(theme, disabled), buttonTextStyle]}>
					-
				</Text>
			</TouchableOpacityView>

			<Text weight={SEMI_BOLD} style={[styles.cartCountTxt(theme)]}>
				{children}
			</Text>
			<TouchableOpacityView
				isGusture={true}
				onPress={onPressIncrease}
				activeOpacity={0.8}
				style={[styles.buttonStyle(theme, disabled, buttonColor)]}
				disabled={disabled}
			>
				<Text weight={SEMI_BOLD} style={[styles.buttonTitle(theme, disabled), buttonTextStyle]}>
					+
				</Text>
			</TouchableOpacityView>
		</View>

	);
};

const getButton = (theme, disabled, buttonColor) => {
	var style = {
		width: 35, //theme.dimens.defaultButtonWidth,
		height: 35, //theme.dimens.defaultButtonHeight,
		justifyContent: 'center',

		borderRadius: 6,
		borderWidth: 1,
		borderColor: disabled ? theme.colors.disabled : theme.colors.secondary
	}
	switch (buttonColor) {
		case "Yellow":
			style["backgroundColor"] = "#FDB54C";
			break;
		case "Red":
			style["backgroundColor"] = "#ff5252";
			break;

		default:
			style["backgroundColor"] = theme.colors.white;
	}

	return style;
};
const styles = StyleSheet.create({


	wrapperStyle: (theme) => ({
		flexDirection: 'row',

	}),
	buttonStyle: (theme, disabled, buttonColor) => ({
		...getButton(theme, disabled, buttonColor)

	}),
	buttonTitle: (theme, disabled) => ({
		color: disabled ? theme.colors.disabled : theme.colors.secondary,
		alignSelf: 'center',
		fontSize: 22
	}),
	cartCountTxt: (theme) => ({
		color: theme.colors.black, //disabled ? theme.colors.disabledDark : theme.colors.white,
		alignSelf: 'center',
		textAlign: 'center',
		width: 30
		// paddingLeft: 10,
		// paddingRight: 10,
		// fontSize: 12
	}),
});

CartButton.propTypes = {
	onPressIncrease: PropTypes.func.isRequired,
	onPressDecrease: PropTypes.func.isRequired,
	// children: PropTypes.string.isRequired,
	style: ViewPropTypes.style,
	disabled: PropTypes.bool,
};

CartButton.defaultProps = {
	style: {},
	disabled: false,
};

export { CartButton };
