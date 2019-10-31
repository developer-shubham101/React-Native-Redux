// full code here --> 
import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { userFetch } from '../actions/APICallAction';
import {
	API_FAIL,
	API_LOADING,
	API_RELOAD,
	API_SUCCEED,
} from '../constants/actionTypes';
import { LOADING, ERROR, SUCCESS } from '../constants/misc';
class APICallPage extends Component {

	constructor() {
		super();
		this.state = {
			waitingIndicator: true
		};
	}
	componentDidMount() {
	 
		this.callApi();
	}
	static getDerivedStateFromProps(newProps, prevState) {
		console.log("newProps ");
		console.log(newProps);

		if (newProps.rexApi.status == SUCCESS || newProps.rexApi.status == ERROR) {
			return {
				waitingIndicator: false
			}
		} else if (newProps.rexApi.status == LOADING) {
			return {
				waitingIndicator: true
			}
		}
		return null;
	}
	componentDidUpdate(prevProps, prevState) {

		if (this.props.rexApi.status == ERROR) {
			// this.refs.toast.show(this.props.rexApi.errorMessage);
		}
	}

	callApi() {
		this.props.userFetch();
	}

	render() {
		var result
		if (!this.state.waitingIndicator) {
			result = this.props.rexApi.value.data.map((data, index) => {
				console.log(data)
				return <View key={index}><Text>{data.email}</Text></View>
			})
		} else {
			return <View><Text>{"Please wait..."}</Text></View>
		}
		{/* countText += </Text> */ }
		return (
			<View>
				<Button
					key={"1"}
					title={"Call API"}
					onPress={() => this.callApi("1")}
				/>
				{
					result
				}

			</View>
		)
	}
}

/*
 state.api 
 here 'api' is Recucer which is define in APIReducer.js which is combine in AppReducer.js
 */
const mapStateToProps = state => {
	return { rexApi: state.api };
};

//connect default props
export default connect(mapStateToProps, {
	userFetch
})(APICallPage);