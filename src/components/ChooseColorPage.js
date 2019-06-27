// full code here --> https://github.com/bizz84/redux-navigation-color-picker
import React, { Component } from 'react';
import { View, Button,Text } from 'react-native';
import { connect } from 'react-redux';
import { colorChanged, profileFetch } from '../actions/ColorChangedAction.js';
import { COLORS } from '../state/Colors.js';
import {
    API_FAIL,
    API_LOADING,
    API_RELOAD,
    API_SUCCEED,
} from '../constants/actionTypes';
class ChooseColorPage extends Component {

	onSelectColor(colorName) {
		// this.props.colorChanged({ colorName });
        // this.props.navigation.goBack();
        this.props.profileFetch();
	}

	render() {
		return (
			<View>
				{Object.keys(COLORS).map((key) => (
					<Button
						key={key}
						title={COLORS[key].name}
						color={COLORS[key].hexCode}
						onPress={() => this.onSelectColor(key)}
					/>
                ))}
                <Text>{this.props.notification.status}</Text>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return { notification: state.notifications  };
};

export default connect(mapStateToProps, {
    colorChanged,
    profileFetch
})(ChooseColorPage);