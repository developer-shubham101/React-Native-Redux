
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { COLORS } from '../state/Colors.js';

class MainPage extends Component {

	onChooseColor() {
		this.props.navigation.navigate('ChooseColor');
    }
    openDrawer() {
		this.props.navigation.openDrawer();
    }
    onApiOperation() {
		this.props.navigation.navigate('APICallPage');
	}

	selectedColor() {
		const { colorName } = this.props.rexColor;
		return COLORS[colorName].hexCode;
	}

	render() {
		const color = this.selectedColor();
		return (
			<View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: color }}>
                <Button
					onPress={this.openDrawer.bind(this)}
					color="#F0d"
					title="Open Menu"
				/>
				<Button
					onPress={this.onChooseColor.bind(this)}
					color="#F0d"
					title="Choose Color"
				/>
                <Button
					onPress={this.onApiOperation.bind(this)}
					color="#F0d"
					title="Open API Page"
				/>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return { rexColor: state.color };
};

export default connect(mapStateToProps)(MainPage);