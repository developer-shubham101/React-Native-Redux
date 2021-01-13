import React, { useState, useContext } from 'react';
import { View, ViewPropTypes, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import PropTypes from 'prop-types';
import { Text, LABEL } from './Text';
import { ThemeContext } from '../../theme';
const SpinnerSelect = ({
	data,
	disabled,
	label,
	onChange,
	attribute,
	style,
	inputStyle, 
	value,
	containerStyle,
	labelStyle,
	error,
}) => {
	// const [value, setValue] = useState('');
	const theme = useContext(ThemeContext);
	const _onChange = (value, index) => {
		if (onChange) {
			onChange(attribute, value);
		}
	};

	return (

		<View style={[styles.containerStyle(theme), style]}>
			{
				label && <Text type={LABEL} style={[styles.labelStyle(theme), labelStyle]}>{label.label}</Text>
			}
			<View style={[styles.dropdownWrapper(theme), Platform.OS === 'ios' ? styles.dropDownWrapperIos : {}]}>
				<RNPickerSelect
					style={styles.dropdown(theme)}
					// onValueChange={(value, index) => { }} 
					onValueChange={_onChange}
					key={data.length}
					value={value}
					placeholder={label}
					items={data}
				/* Icon={() => {
					return <Image
						resizeMode="contain"
						style={styles.downArrowStyle}
						source={require('./../../../assets/img/ic_down_arrow.png')}
					/>
				}} */
				/>
			</View>
			{/* {
				error && <Text type="label" style={[styles.errorStyle(theme)]}>{error}</Text>
			} */}
		</View>

	);
};

// TODO: add style for disabled element
const styles = {
	containerStyle: theme => ({
		backgroundColor: theme.colors.surface,
	}),
	labelStyle: theme => ({
		// paddingLeft: theme.spacing.large,
		// flex: 1,

	}),
	dropdown: theme => ({
		height: theme.dimens.defaultInputBoxHeight,
		justifyContent: 'center',
		paddingStart: 10,
		// borderColor: "#ddd",
		inputAndroid: {
			height: theme.dimens.defaultInputBoxHeight,
			// height: 30,
			backgroundColor: theme.colors.white
		},
		inputIOSContainer: {
			height: theme.dimens.defaultInputBoxHeight,
			justifyContent: 'center',
			paddingLeft: 8,
			backgroundColor: theme.colors.white,
			borderRadius: 4
			// padding: 30,
		}
	}),
	dropdownWrapper: theme => ({
		borderWidth: 1,
		borderRadius: 4,
		borderColor: theme.colors.border,
	}),
	inputStyle: {
		textAlign: 'center',
	},
	downArrowStyle: {
		height: 15,
		width: 15,
		right: 10
	}
};

SpinnerSelect.propTypes = {
	/* 	data: PropTypes.arrayOf(PropTypes.shape({
			value: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
			]).isRequired,
			label: PropTypes.string,
		})).isRequired, */
	label: PropTypes.string.isRequired,
	attribute: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	style: ViewPropTypes.style,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
};

SpinnerSelect.defaultProps = {
	value: null,
	disabled: false,
	onChange: null,
	attribute: '',
	style: {},
};

export { SpinnerSelect };
