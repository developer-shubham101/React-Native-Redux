import React, {useContext} from 'react';
import {Image, StyleSheet, View, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import {Text, TEXT_COLOR_BLACK} from './Text';
import {ThemeContext} from '../../theme';
import Ripple from 'react-native-material-ripple';

const ToolBarSecond = ({onPressLeft, title, style, menus}) => {
	const theme = useContext(ThemeContext);
	const renderMenus = () => {
		return menus.map((element) => {
			return <Ripple
				key={element.key}
				onPress={element.onPress}
				style={styles.toolbarBtnWrapperStyle(theme)}
				rippleColor={'rgb(255, 255, 255)'}>
				<Image
					resizeMode="contain"
					style={styles.toolbarBtnImgStyle(theme)}
					source={element.icon}
				/>
			</Ripple>;
		});
	};

	return (
		<View style={[styles.toolBar(theme), style]}>
			<Ripple
				onPress={onPressLeft}
				style={styles.toolbarBtnWrapperStyle(theme)}
				rippleColor={'rgb(255, 255, 255)'}>
				<Image
					resizeMode="contain"
					style={styles.toolbarBtnImgStyle(theme)}
					source={require('./../../../assets/img/ic_arrow_back.png')}
				/>
			</Ripple>
			<Text color={TEXT_COLOR_BLACK} style={styles.toolBarTitle} type="heading"> {title} </Text>


			{renderMenus()}
		</View>
	);
};

const styles = StyleSheet.create({
	toolBar: theme => ({
		height: theme.dimens.toolBarHeight,
		backgroundColor: theme.colors.primary,
		flexDirection: 'row',
		justifyContent: 'space-between',
	}),
	toolbarBtnWrapperStyle: theme => ({
		padding: theme.dimens.toolBarButtonPadding,
		height: theme.dimens.toolBarBtnWidth,
		width: theme.dimens.toolBarBtnWidth,
	}),
	toolBarTitle: {
		flex: 1,
		alignSelf: 'center',
	},
	pageIcon: {
		alignSelf: 'center',
		height: 30,

	},
	toolbarBtnImgStyle: theme => ({
		flex: 1,
		tintColor: theme.colors.black,
	}),
});

ToolBarSecond.propTypes = {
	onPressLeft: PropTypes.func.isRequired,
	title: PropTypes.string,
	style: ViewPropTypes.style,
	menus: PropTypes.array.isRequired,
};

ToolBarSecond.defaultProps = {
	onPressLeft: () => {
	},

	style: {},
	disabled: false,
	menus: [],
};

export {ToolBarSecond};
