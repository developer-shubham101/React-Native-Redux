
// full code here --> https://github.com/bizz84/redux-navigation-color-picker
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import ChooseColorPage from './ChooseColorPage';

export const AppNavigator = createStackNavigator({
	Main: { screen: MainPage },
	ChooseColor: {
		screen: ChooseColorPage,
		navigationOptions: {
			headerLeft: null,
		}
	}
}, {
		initialRouteName: 'Main',
		mode: 'modal'
	});

const AppWithNavigationState = createAppContainer(AppNavigator);

const mapStateToProps = state => ({
	nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);