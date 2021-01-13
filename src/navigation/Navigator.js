import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/account/Login';
import Dashboard from '../components/account/Dashboard';
import * as routes from './routes';
import AuthLoading from '../components/account/AuthLoading';


const AuthStack = createStackNavigator({
	[routes.NAVIGATION_LOGIN_PATH]: Login,
}, {
	headerMode: 'none',
});


const AccountSwitch = createSwitchNavigator({
	// Requests,

	[routes.NAVIGATION_AUTH_LOADING_SWITCH]: AuthLoading,
	[routes.NAVIGATION_AUTH_STACK_PATH]: AuthStack,
	[routes.NAVIGATION_DASHBOARD]: Dashboard,

});


export const Navigator = createAppContainer(AccountSwitch);
