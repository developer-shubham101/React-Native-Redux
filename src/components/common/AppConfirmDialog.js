/**
* MIT License
* 
* Copyright (c) 2017 Douglas Nassif Roma Junior
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE. 
*/

import React, { Component } from 'react'
import {
	Modal,
	View,
	ViewPropTypes,
	TouchableWithoutFeedback,

	Platform,
	ScrollView
} from 'react-native'
import { Text } from './../common'
const { OS } = Platform;

import PropTypes from 'prop-types';
import { HEADING, SEMI_BOLD } from './Text';
import { Button } from './Button';

class AppConfirmDialog extends Component {


	renderButtons() {
		const { negativeButton, positiveButton } = this.props;
	 
		return (
			<View weight={SEMI_BOLD} style={{ padding: 10, flexDirection: 'row' }}>
				<Button onPress={negativeButton.onPress} type={3} style={{ flex: 1, marginRight: 10, }}>
					{negativeButton.title}
				</Button>
				<Button onPress={positiveButton.onPress} style={{ flex: 1, marginLeft: 10, }}>
					{positiveButton.title}
				</Button>
			</View>
		)
	}


	renderContent() {
		const { children, contentStyle } = this.props;
		const { message, messageStyle } = this.props;
		return (
			<View weight={SEMI_BOLD} style={[{
				// width: '100%',
				margin: 12,
				// paddingTop: 20
			}, contentStyle]}>
				<Text style={{}}>{message}</Text>
			</View>
		)
	}

	renderTitle() {
		const { title, titleStyle } = this.props;

		// const textAlign = OS === 'ios' ? "center" : null;

		if (title)
			return (
				<Text weight={SEMI_BOLD} style={[{
					// textAlign,
					color: "#000000DD",
					// fontSize: 14,
					margin: 12,
					marginBottom: 0
				}, titleStyle]}>
					{title}
				</Text>
			)
	}



	_renderOutsideTouchable(onTouch) {
		const view = <View style={{ flex: 1, width: '100%' }} />

		if (!onTouch) return view;

		return (
			<TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
				{view}
			</TouchableWithoutFeedback>
		)
	}

	render() {
		const {
			dialogStyle, visible, animationType, onRequestClose, onShow,
			onOrientationChange, onTouchOutside, overlayStyle, supportedOrientations,
			keyboardDismissMode, keyboardShouldPersistTaps,
		} = this.props;

		const dialogBackgroundColor = /* OS === 'ios' ? "#e8e8e8" : */ "#ffffff";
		const dialogBorderRadius = 5;//OS === 'ios' ? 5 : 1;

		return (
			<Modal
				animationType={animationType}
				transparent={true}
				visible={visible}
				onRequestClose={onRequestClose}
				onShow={onShow}
				onOrientationChange={onOrientationChange}
				supportedOrientations={supportedOrientations}
			>
				<ScrollView
					style={{
						flex: 1,
					}}
					contentContainerStyle={{
						flex: 1,
					}}
					keyboardDismissMode={keyboardDismissMode}
					keyboardShouldPersistTaps={keyboardShouldPersistTaps}
				>
					<View style={[{
						flex: 1,
						backgroundColor: "#000000AA",
						padding: 24
					}, overlayStyle]}>
						{this._renderOutsideTouchable(onTouchOutside)}

						<View style={[{
							backgroundColor: dialogBackgroundColor,
							width: '100%',
							shadowOpacity: 0.24,
							borderRadius: dialogBorderRadius,
							elevation: 4,
							shadowOffset: {
								height: 4,
								width: 2
							}
						}, dialogStyle]}>

							{this.renderTitle()}

							{this.renderContent()}

							{this.renderButtons()}

						</View>

						{this._renderOutsideTouchable(onTouchOutside)}
					</View>
				</ScrollView>
			</Modal>
		)
	}
}

AppConfirmDialog.propTypes = {
	dialogStyle: ViewPropTypes.style,
	contentStyle: ViewPropTypes.style,
	buttonsStyle: ViewPropTypes.style,
	overlayStyle: ViewPropTypes.style,
	buttons: PropTypes.element,
	visible: PropTypes.bool,
	onRequestClose: PropTypes.func,
	onShow: PropTypes.func,
	onTouchOutside: PropTypes.func,
	title: PropTypes.string,
	titleStyle: Text.propTypes.style,
	keyboardDismissMode: PropTypes.string,
	keyboardShouldPersistTaps: PropTypes.string
}

AppConfirmDialog.defaultProps = {
	visible: false,
	titleStyle: {},
	onRequestClose: () => null
};

export default AppConfirmDialog;
