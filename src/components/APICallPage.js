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

    callApi(colorName) {
        this.props.userFetch();
    }

    render() {
        var result
        if (this.props.propApi.status == SUCCESS) {

            result = this.props.propApi.value.data.map((data) => {
                console.log(data)
                return <View><Text>{data.email}</Text></View>
            })
        } else if (this.props.propApi.status == LOADING) {

            return <View><Text>{"Please wait..."}</Text></View>
        } else {

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
    return { propApi: state.api };
};

//connect default props
export default connect(mapStateToProps, {
    userFetch
})(APICallPage);