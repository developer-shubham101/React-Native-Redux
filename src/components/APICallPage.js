// full code here --> https://github.com/bizz84/redux-navigation-color-picker
import React, { Component } from 'react';
import { View, Button,Text } from 'react-native';
import { connect } from 'react-redux';
import {  profileFetch } from '../actions/APICallAction'; 
import {
    NOTIFICATIONS_FAIL,
    NOTIFICATIONS_LOADING,
    NOTIFICATIONS_RELOAD,
    NOTIFICATIONS_SUCCEED,
} from '../constants/actionTypes';
class APICallPage extends Component {

	onSelectColor(colorName) {
		// this.props.colorChanged({ colorName });
        // this.props.navigation.goBack();
        this.props.profileFetch();
	}

	render() {
		return (
			<View>
				 
					<Button
						key={"1"}
						title={"Call API"} 
						onPress={() => this.onSelectColor("1")}
					/>
                 
                <Text>{this.props.propApi.value}</Text>
			</View>
		)
	}
}

/*
 state.api 
 here 'api' is Recucer which is define in APIReducer.js which is combine in AppReducer.js
 */
const mapStateToProps = state => {
	return { propApi: state.api  };
};

//connect default props
export default connect(mapStateToProps, { 
    profileFetch
})(APICallPage);