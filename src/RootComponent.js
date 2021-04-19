import React, { useEffect } from 'react';

import connect from 'react-redux/lib/connect/connect';
import { View } from 'react-native';

import FcmService from './FcmService';
const RootComponent = ({
	children,
}) => { // the props contain the messages and the locale

	useEffect(() => {
		// ComponentDidMount
		let fcmService = new FcmService()
		fcmService.register(onNotification, onOpenNotification);

	}, []);

	const onNotification = (message) => {
		console.log("RootComponent::: onNotification message::::::", message);
	}
	const onOpenNotification = (message) => {
		console.log("RootComponent::: onOpenNotification message::::::", message);

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

