import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AppSafeAreaView, Text, TEXT_COLOR_BLACK, HEADING } from '../common';
import { ThemeContext } from '../../theme';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Dashboard = ({
	loading,
	error,
	success,
	navigation,
	auth: _auth,

	enterUserName,
	enterPassword,
}) => {
	const theme = useContext(ThemeContext);
	// Internal State
	const [rootHeight, setRootHeight] = useState(theme.dimens.WINDOW_HEIGHT);

	// Reference
	const passwordInput = useRef();


	const onPageLayout = (event) => {
		const { width, height } = event.nativeEvent.layout;
		// this.setState({ rootWidth: width });
		setRootHeight(height);
	};
	

	return (
		<AppSafeAreaView>
				<View style={styles.toolBar(theme)}>
						<Text style={{marginLeft: 10}} color={TEXT_COLOR_BLACK}
							  type={HEADING}>{'Dashboard'}</Text>


				</View>
			<View
				style={{ flex: 1 }}
				onLayout={onPageLayout}
			>
				<KeyboardAwareScrollView style={{ flex: 1 }}>
					<View
						style={[styles.container(theme), { height: rootHeight }]}>
						

					</View>

				</KeyboardAwareScrollView>
			</View>
		</AppSafeAreaView>

	);
};

const styles = StyleSheet.create({
	
	toolBar: theme => ({
		height: 50,//theme.dimens.toolBarHeight,
		backgroundColor: theme.colors.white,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	}),



	container: theme => ({
		flex: 1,
		backgroundColor: theme.colors.background,
		alignItems: 'center',
		// paddingTop: theme.dimens.WINDOW_HEIGHT * 0.1,
		// justifyContent: 'space-between',
		paddingTop: 20,
	}),
	
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

Dashboard.propTypes = {
	loading: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
	success: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
};

Dashboard.defaultProps = {
	error: null,
	success: null,
	loading: false,
};

export default connect(mapStateToProps, {
})(Dashboard);
