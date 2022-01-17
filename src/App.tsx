import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeManager, theme } from './theme';
import { Navigator } from './navigation/Navigator';
import { onAppStart } from './helper/app';

import SplashScreen from 'react-native-splash-screen';
import connect from 'react-redux/lib/connect/connect';
import { AppRegistry } from 'react-native';

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
						<>
							<Navigator />
							<Toast ref={(ref) => Toast.setRef(ref)} />
						</>
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
