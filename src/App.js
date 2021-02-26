import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { ThemeManager, theme } from './theme';
import { Navigator } from './navigation/Navigator';
import NavigationService from './navigation/NavigationService';
import { onAppStart } from './helper/app';

import SplashScreen from 'react-native-splash-screen';
import connect from 'react-redux/lib/connect/connect';
import { AppRegistry, Platform } from 'react-native';

import Toast from 'react-native-toast-message';
import RootComponent from './RootComponent';
onAppStart(store);

class ReactNativeRedux extends React.Component {

	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		return (
			<Provider store={store}>
				<ThemeManager theme={theme}>
					<RootComponent>
						<Navigator
							ref={(navigatorRef) => {
								NavigationService.setTopLevelNavigator(navigatorRef);
							}}
						/>
						<Toast ref={(ref) => Toast.setRef(ref)} />
					</RootComponent>
				</ThemeManager>
			</Provider>
		);
	}
}
const mapStateToProps = state => {
	return {};
};

const ReactNativeReduxConnected = connect(mapStateToProps, {})(ReactNativeRedux);
AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeReduxConnected);

export default ReactNativeRedux;
