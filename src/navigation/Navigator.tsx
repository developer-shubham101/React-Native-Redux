import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/account/Login';
import Dashboard from '../components/account/Dashboard';
import * as routes from './routes';
import AuthLoading from '../components/account/AuthLoading';

const Stack = createStackNavigator();

const Navigator = () => {

	function PostLogin() {
		return <Stack.Navigator headerMode="none">
			<Stack.Screen name={routes.NAVIGATION_AUTH_LOADING_SWITCH} component={AuthLoading} />
			<Stack.Screen name={routes.NAVIGATION_AUTH_STACK_PATH} component={Login} />
			<Stack.Screen name={routes.NAVIGATION_DASHBOARD} component={Dashboard} />
		</Stack.Navigator>;
	}

	return (
		<NavigationContainer>
			<PostLogin />
		</NavigationContainer>
	);
};
export { Navigator };
