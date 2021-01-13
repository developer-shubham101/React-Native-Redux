import React, { useContext } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	ViewPropTypes,
	View,
	Image,
	StatusBar,
	Platform,
	SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import { Text } from './Text';
import { ThemeContext } from '../../theme';
import Ripple from 'react-native-material-ripple';

const AppSafeAreaView = ({
	children,
	style
}) => {
	const theme = useContext(ThemeContext);

	return (Platform.OS == 'ios') ?
		<SafeAreaView style={[{ flex: 1 }, style]}>{children}</SafeAreaView> :
		<View style={[{ flex: 1 }, style]}>
			<StatusBar backgroundColor={theme.colors.primaryDark} />
			{children}
		</View>

	/* 	return <SafeAreaView style={[{ flex: 1 }, style]}>
	
			{(Platform.OS == 'ios') ?
				null :
				<StatusBar backgroundColor={theme.colors.primaryDark} />
			}
	
			{children}</SafeAreaView> */
};

const styles = StyleSheet.create({

});

AppSafeAreaView.propTypes = {
	style: ViewPropTypes.style,
};

AppSafeAreaView.defaultProps = {
	style: {},
};

export { AppSafeAreaView };
