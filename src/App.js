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
onAppStart(store);

class FunderBubble extends React.Component {

	componentDidMount() {

		// console.log("componentDidMount", this.props);

		SplashScreen.hide();

		// this.createNotificationListeners(); //add this line
	}

	// //Remove listeners allocated in createNotificationListeners()
	// componentWillUnmount() {
	// 	this.notificationListener();
	// 	this.notificationOpenedListener();
	// }


	// 	async createNotificationListeners() {
	//         /*
	//   * Triggered when a particular notification has been received in foreground
	//   * */
	// 		this.notificationListener = firebase.notifications().onNotification((notification) => {
	// 			const { title, body } = notification;
	// 			this.showAlert(title, body);
	// 		});

	// 		/*
	// 		* If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
	// 		* */
	// 		this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
	// 			const { title, body } = notificationOpen.notification;
	// 			this.showAlert(title, body);
	// 		});

	// 		/*
	// 		* If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
	// 		* */
	// 		const notificationOpen = await firebase.notifications().getInitialNotification();
	// 		if (notificationOpen) {
	// 			const { title, body } = notificationOpen.notification;
	// 			this.showAlert(title, body);
	// 		}
	// 		/*
	// 		* Triggered for data only payload in foreground
	// 		* */
	// 		this.messageListener = firebase.messaging().onMessage((message) => {
	// 			//process data message
	// 			console.log(JSON.stringify(message));
	// 		});
	// 	}

	// showAlert(title, body, booking_id) {
	// 	Alert.alert(
	// 		title, body,
	// 		[
	// 			{
	// 				text: 'OK App', onPress: () => {
	// 					console.log('OK Pressed');
	// 					//this.navigator.dispatch(NavigationActions.navigate({ routeName: 'BookingStatus', params: {booking_id:booking_id} }));
	// 					//this.props.navigation.navigate('BookingStatus',{booking_id:booking_id});
	// 				}
	// 			},
	// 		],
	// 		{ cancelable: false },
	// 	);
	// }



	render() {
		return (
			<Provider store={store}>
				<ThemeManager theme={theme}>
					<Navigator
						ref={(navigatorRef) => {
							NavigationService.setTopLevelNavigator(navigatorRef);
						}}
					/>
					<Toast ref={(ref) => Toast.setRef(ref)} />
				</ThemeManager>
			</Provider>
		);
	}
}
const mapStateToProps = state => {
	return {};
};

const FunderBubbleConnected = connect(mapStateToProps, {})(FunderBubble);
AppRegistry.registerComponent('FunderBubble', () => FunderBubbleConnected);

export default FunderBubble;
