import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ALERT_ERROR, ALERT_SUCCESS, AlertText, AppSafeAreaView, Button, Input, Spinner, Text, TEXT_COLOR_BLACK, HEADING } from '../common';
import { auth } from '../../actions';
import {
	NAVIGATION_DASHBOARD,
} from '../../navigation/routes';
import { ThemeContext } from '../../theme';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const Login = ({
	loading,
	error,
	success,
	navigation,
	auth: _auth,

	enterUserName,
	enterPassword,

	updateLoginUI,
}) => {
	const theme = useContext(ThemeContext);
	// Internal State
	const [rootHeight, setRootHeight] = useState(theme.dimens.WINDOW_HEIGHT);
	const [userName, setuserName] = useState('');
	const [userPassword, setuserPassword] = useState('');



	// Reference
	const passwordInput = useRef();

	const onLoginPress = () => {
		_auth({ user_name: "enterUserName", password: "enterPassword" });
		navigation.navigate(NAVIGATION_DASHBOARD)
	};

	const renderButtons = () => {
		if (loading) {
			return <Spinner style={{ marginTop: 30 }} />;
		}

		return (
			<View style={{ marginBottom: 30 }}>
				{renderMessages()}
				<Button
					disabled={enterUserName.length === 0 || enterPassword.length <= 5}
					onPress={onLoginPress}
					style={[styles.buttonStyle(theme), styles.loginButtonStyle]}
				>
					{'Next'}
				</Button>
			</View>
		);
	};

	const renderMessages = () => {
		if (error) {
			return <AlertText alertType={ALERT_ERROR}>{error}</AlertText>;
		}
		if (success) {
			return <AlertText alertType={ALERT_SUCCESS}>{success}</AlertText>;
		}
	};
	const onPageLayout = (event) => {
		const { width, height } = event.nativeEvent.layout;
		// this.setState({ rootWidth: width });
		setRootHeight(height);
	};
	const onPressBack = () => {
		navigation.goBack();
	};

	return (
		<AppSafeAreaView>
			<View style={styles.toolBar(theme)}>
				<Text style={{ marginLeft: 10 }} color={TEXT_COLOR_BLACK}
					type={HEADING}>{'LOGIN'}</Text>

			</View>
			<View
				style={{ flex: 1 }}
				onLayout={onPageLayout}
			>
				<KeyboardAwareScrollView style={{ flex: 1 }}>
					<View
						style={[styles.container(theme), { height: rootHeight }]}>
						<Input
							label={'User ID'}
							// error={"Invalid Mobile"}
							autoCapitalize="none"
							underlineColorAndroid="transparent"
							placeholder={'User ID'}
							// keyboardType="numeric"
							returnKeyType="next"
							autoCorrect={false}
							value={userName}
							// maxLength={10}
							editable={!loading}
							onChangeText={(value) => setuserName(value)}
							onSubmitEditing={() => passwordInput.current.focus()}
							containerStyle={styles.inputContainer(theme)}
							inputStyle={{}}
						/>

						<Input
							assignRef={(input) => {
								passwordInput.current = input;
							}}
							label={'Password'}
							secureTextEntry
							// error={"Invalid Mobile"}
							autoCapitalize="none"
							underlineColorAndroid="transparent"
							placeholder={'Password'}
							textContentType="password"
							// keyboardType="numeric"
							returnKeyType="done"
							autoCorrect={false}
							value={userPassword}
							editable={!loading}
							onChangeText={(value) => setuserPassword(value)}
							onSubmitEditing={onLoginPress}
							containerStyle={styles.inputContainer(theme)}
							inputStyle={{}}
						/>

						{renderButtons()}

					</View>

				</KeyboardAwareScrollView>
			</View>
		</AppSafeAreaView>

	);
};

const styles = StyleSheet.create({
	buttonStyle: theme => ({
		marginTop: theme.spacing.large,
		width: theme.dimens.WINDOW_WIDTH * 0.95,
	}),
	toolBar: theme => ({
		height: 50,//theme.dimens.toolBarHeight,
		backgroundColor: theme.colors.white,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	}),

	loginButtonStyle: {},


	container: theme => ({
		flex: 1,
		backgroundColor: theme.colors.background,
		alignItems: 'center',
		// paddingTop: theme.dimens.WINDOW_HEIGHT * 0.1,
		// justifyContent: 'space-between',
		paddingTop: 20,
	}),
	inputContainer: theme => ({
		width: theme.dimens.WINDOW_WIDTH * 0.95,
		marginBottom: theme.spacing.large,

	}),
	buttonMargin: theme => ({
		marginTop: theme.spacing.large,
	}),
	error: theme => ({
		fontWeight: '100',
		color: theme.colors.error,
		width: theme.dimens.WINDOW_WIDTH * 0.85,
		textAlign: 'center',
		marginTop: theme.spacing.large,
	}),
	success: theme => ({
		fontWeight: '100',
		width: theme.dimens.WINDOW_WIDTH * 0.85,
		color: theme.colors.success,
		textAlign: 'center',
		marginTop: theme.spacing.extraLarge,
	}),
	link: theme => ({
		// marginTop: theme.spacing.extraLarge,

	}),
	linkTitle: theme => ({
		textAlign: 'center',
		color: theme.colors.secondary,

	}),

	openContactWrapper: {
		position: 'absolute',
		top: 18,
		right: 0,
		height: 50,
		width: 50,
		padding: 10,
		// backgroundColor: "#f33"
	},
});

const mapStateToProps = ({ customerAuth }) => {
	// console.log("customerAuth", customerAuth);


	const {
		error,
		success,
		loading,


		enterUserName,
		enterPassword,
		enterName,
	} = customerAuth;

	return {
		error,
		success,
		loading,

		enterUserName,
		enterPassword,
		enterName,
	};
};

Login.propTypes = {
	loading: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
	success: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
};

Login.defaultProps = {
	error: null,
	success: null,
	loading: false,
};

export default connect(mapStateToProps, {
	auth,

})(Login);
