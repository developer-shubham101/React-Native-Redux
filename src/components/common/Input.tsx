import React, { useContext } from 'react';
import { TextInput, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { Text, SEMI_BOLD, LABEL } from './Text';
import { ThemeContext } from '../../theme';
import { fontFamily } from '../../theme/typography';

const Input = ({
	label,
	error,
	value,
	onChangeText,
	placeholder,
	secureTextEntry,
	assignRef,
	containerStyle,
	labelStyle,
	inputStyle,
	...props
}) => {
	const theme = useContext(ThemeContext);

	return (
		<View style={[styles.containerStyle(theme), containerStyle]}>
			{
				label && <Text type={LABEL} style={[styles.labelStyle(theme), labelStyle]}>{label}</Text>
			}
			<TextInput
				{...props}
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				placeholderTextColor={theme.colors.bodyText}
				autoCorrect={false}
				style={[styles.inputStyle(theme), inputStyle]}
				value={value}
				onChangeText={onChangeText}
				ref={(component) => { assignRef && assignRef(component); }}
			/>
			{
				error && <Text type="label" style={[styles.errorStyle(theme)]}>{error}</Text>
			}
		</View>
	);
};

const styles = {
	containerStyle: theme => ({
		backgroundColor: theme.colors.surface,
	}),
	inputStyle: theme => ({
		fontFamily: fontFamily,
		color: theme.colors.titleText,

		borderWidth: 1,
		borderColor: theme.colors.border,
		padding: 10,
		borderRadius: 3,
		height: theme.dimens.inputHeight
	}),
	labelStyle: theme => ({
		// paddingLeft: theme.spacing.large,
		// flex: 1,

	}),

	errorStyle: theme => ({
		// paddingLeft: theme.spacing.large,
		// flex: 1,
		color: theme.colors.error
	}),
};

Input.propTypes = {
	label: PropTypes.string,
	error: PropTypes.string,
	value: PropTypes.string,
	onChangeText: PropTypes.func,
	placeholder: PropTypes.string,
	secureTextEntry: PropTypes.bool,
	containerStyle: ViewPropTypes.style,
	assignRef: PropTypes.func,
};

Input.defaultProps = {
	label: null,
	error: null,
	value: '',
	placeholder: '',
	secureTextEntry: false,
	assignRef: () => { },
	onChangeText: () => { },
};

export { Input };
