import React, { useContext, Children } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../theme';
import { Text } from './Text';

// Possible value for prop "type" for Text
export const ALERT_WARNING = 'warning';
export const ALERT_ERROR = 'error';
export const ALERT_SUCCESS = 'success';
export const ALERT_INFORMATION = 'information';


const AlertText = ({
	opacity,
	style,
	alertType,
	children,
	...props

}) => {
	const theme = useContext(ThemeContext);
	var bagColor = theme.colors.error;
	switch (alertType) {
		case ALERT_WARNING:
			bagColor = theme.colors.warning;
			break;
		case ALERT_ERROR:
			bagColor = theme.colors.error;
			break;
		case ALERT_SUCCESS:
			bagColor = theme.colors.success;
			break;
		case ALERT_INFORMATION:
			bagColor = theme.colors.information;
			break;
	}

	if (opacity){
		bagColor = bagColor + opacity;
	} 

	return (
		<Text
			{...props}
			style={StyleSheet.flatten([styles.text(theme, bagColor), style])} >
			{children}
		</Text>
	);
};



const styles = {
	text: (theme, bgColor) => ({
		padding: 3,
		borderRadius: 4,
		backgroundColor: bgColor,
		color: theme.colors.white,
		// width: "100%", //theme.dimens.WINDOW_WIDTH * 0.85,
		textAlign: 'center',
		marginTop: theme.spacing.small,
	}),
	error: theme => ({

	}),
	// success: theme => ({
	// 	fontWeight: '100',
	// 	width: theme.dimens.WINDOW_WIDTH * 0.85,
	// 	color: theme.colors.success,
	// 	textAlign: 'center',
	// 	marginTop: theme.spacing.extraLarge,
	// }),
};

Text.propTypes = {
	alertType: PropTypes.oneOf([ALERT_WARNING, ALERT_ERROR, ALERT_SUCCESS, ALERT_INFORMATION]),

};

Text.defaultProps = {
	alertType: ALERT_INFORMATION,
};

export { AlertText };
