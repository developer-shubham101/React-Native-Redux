
// full code here --> https://github.com/bizz84/redux-navigation-color-picker
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import ChooseColorPage from './ChooseColorPage';
import APICallPage from './APICallPage';

/**
 * App navigation is 
 */
export const AppNavigator = createStackNavigator({
    Main: { screen: MainPage },
    APICallPage: { screen: APICallPage },
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