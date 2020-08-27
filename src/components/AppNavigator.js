
// full code here --> 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { connect } from 'react-redux';
import MainPage from './MainPage';
import ChooseColorPage from './ChooseColorPage';
import APICallPage from './APICallPage';
import SideMenu from './SideMenu/SideMenu';
/**
 * App navigation is 
 */
export const AppNavigator = createStackNavigator({
	Main: { screen: MainPage },
	APICallPage: { screen: APICallPage },
	ChooseColor: {
		screen: ChooseColorPage
	}
}, {
	initialRouteName: 'Main',
	mode: 'modal'
});

export const DrawerNavigator = createDrawerNavigator({
	AppNavigator
}, {
	contentComponent: SideMenu,
	drawerWidth: 300
});

const AppWithNavigationState = createAppContainer(DrawerNavigator);

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AppWithNavigationState);