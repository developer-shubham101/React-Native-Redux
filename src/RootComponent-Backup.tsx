import React, { useEffect } from 'react';

import connect from 'react-redux/lib/connect/connect';
import { View } from 'react-native';

import firebase from 'react-native-firebase';

const RootComponent = ({
	children,
}) => { // the props contain the messages and the locale

	useEffect(() => {
		// ComponentDidMount
		createNotificationListeners();
	}, []);

	let messageListener = null;
	let notificationListener = null;

	const createNotificationListeners = async () => {
		notificationListener = firebase.notifications().onNotification((notification) => {
			const { body } = notification.data;
			console.log('NotificationListener', 'onNotification:', notification);
			_getProfile(true);
			_getRecentRequestList(true);

			// alert('message');

			const localNotification = new firebase.notifications.Notification()
				.setNotificationId(notification.notificationId)
				.setSubtitle(notification.subtitle)
				.setBody(body)
				.setData(notification.data)
				.android.setChannelId('announcement') // e.g. the id you chose above
				.android.setSmallIcon('ic_stat_ic_notification') // create this icon in Android Studio
				.android.setColor('#000000') // you can set a color here
				.android.setPriority(firebase.notifications.Android.Priority.High);


			firebase.notifications()
				.displayNotification(localNotification)
				.catch(err => console.error(err));
		});


		const channel = new firebase.notifications.Android.Channel('announcement', 'Announcement', firebase.notifications.Android.Importance.High)
			.setDescription('Default Announcement')
			.setSound('sampleaudio.mp3');
		firebase.notifications().android.createChannel(channel);

 


		const notificationOpen = await firebase.notifications().getInitialNotification();
		if (notificationOpen) {
			// const { title, body } = notificationOpen.notification;
			const { order_id, notificationFor } = notificationOpen.notification.data;
			console.log('NotificationListener', 'getInitialNotification:', notificationOpen);
			// if (title) {
			// 	this.showAlert(title, body);
			// }
			moveToPage(notificationFor, order_id);
		}


		messageListener = firebase.messaging().onMessage((message) => {
			//process data message
			console.log('NotificationListener', 'onMessage:', JSON.stringify(message));
		});
	}

	const moveToPage = () => {

	}
	// console.log("RootComponent::", props);
	return <View style={{ flex: 1 }}>
		{children}
	</View>
};

const mapStateToProps = () => {
	return {};
};

export default connect(mapStateToProps, {
})(RootComponent);

