import React, { useContext } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	ViewPropTypes,
	View,
} from 'react-native';
import PropTypes from 'prop-types';
import { Text } from './Text';
import { ThemeContext } from '../../theme';

const RadioButton = ({
	onPress,
	children,
	style,
	disabled, 
	isActive
}) => {
	const theme = useContext(ThemeContext);


	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.8}
			style={[styles.buttonStyle, style]}
			disabled={disabled}
		>
			{isActive ?
				<View style={[[styles.outerCycle, styles.outerCycleActive(theme)]]}>
					<View style={[styles.innerCycle(theme)]} />
				</View> : <View style={[[styles.outerCycle ]]} />
			}
			<Text style={styles.buttonTitle(theme, disabled)}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};
 
const styles = StyleSheet.create({
	  
	outerCycle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "#ddd",
		padding: 3,
		
	},
	outerCycleActive: (theme) => ({ 
		borderColor: theme.colors.secondary,
	}),
	innerCycle: (theme) => ({
		flex: 1,
		borderRadius: 10,
		backgroundColor: theme.colors.secondary,
	}),


	buttonStyle: { 
		flexDirection: 'row', 
	},
	buttonTitle: (theme, disabled) => ({
		// color: theme.colors.white,// disabled ? theme.colors.disabledDark : theme.colors.white,
		alignSelf: 'center',
		marginStart: 5
	}),
});

RadioButton.propTypes = {
	onPress: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired,
	style: ViewPropTypes.style,
	disabled: PropTypes.bool,
	isActive: PropTypes.bool.isRequired,
};

RadioButton.defaultProps = {
	style: {},
	disabled: false,
	isActive: false
};

export { RadioButton };
