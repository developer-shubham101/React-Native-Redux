// full code here --> https://github.com/bizz84/redux-navigation-color-picker
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { colorChanged } from '../actions/ColorChangedAction.js';
import { COLORS } from '../state/Colors.js';
 
class ChooseColorPage extends Component {

	onSelectColor(colorName) {
		this.props.colorChanged({ colorName });
        this.props.navigation.goBack();
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
			</View>
		)
	}
}

const mapStateToProps = state => {
	return { notification: state.notifications  };
};

export default connect(mapStateToProps, {
    colorChanged
})(ChooseColorPage);