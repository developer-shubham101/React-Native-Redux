
// full code here --> 
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
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
        screen: ChooseColorPage,
        navigationOptions: {
            headerLeft: null,
        }
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

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);