import React, {useContext} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {ThemeContext} from '../../theme';
import {
	fontFamily,
	fontFamilyBold,
	fontFamilyLight,
	fontFamilyMedium,
	fontFamilySemiBold,
} from '../../theme/typography';
import colors from '../../theme/colors';
import {Text} from './Text';

// Possible value for prop "type" for Text
export const HEADING = 'heading';
export const SUB_HEADING = 'subheading';
export const BODY = 'body';
export const LABEL = 'label';
export const CAPTION = 'caption';


export const NORMAL = 'normal';
export const SEMI_BOLD = 'semibold';
export const BOLD = 'bold';
export const LIGHT = 'light';
export const MEDIUM = 'medium';

export const TEXT_COLOR_WHITE = colors.textColorWhite;
export const TEXT_COLOR_BLACK = colors.textColorBlack;
export const TEXT_COLOR_GRAY_1 = colors.textColorGray1;
export const TEXT_COLOR_GRAY_2 = colors.textColorGray2;
export const TEXT_COLOR_GRAY_3 = colors.textColorGray3;
export const TEXT_COLOR_GRAY_4 = colors.textColorGray4;
export const TEXT_COLOR_GRAY_5 = colors.textColorGray5;

const TextAvatar = ({
						type,
						weight,
						style,
						color,
						text,
						...props
					}) => {
	const theme = useContext(ThemeContext);
	return (
		<View style={styles.container}>
			<Text>
				{text}
			</Text>
		</View>

	);
};

const getTextStyle = (type, weight, color, theme) => {
	var style = {
		fontFamily: fontFamily,
	};
	switch (type) {
		case HEADING:
			style['fontSize'] = 18;
			break;
		case SUB_HEADING:
			style['fontSize'] = 16;
			break;
		case LABEL:
			style['fontSize'] = 14;
			break;
		case CAPTION:
			style['fontSize'] = 12;
			break;
		default:
			style['fontSize'] = 14;
	}
	switch (weight) {
		case NORMAL:
			style['fontFamily'] = fontFamily;
			break;
		case BOLD:
			style['fontFamily'] = fontFamilyBold;
			break;
		case SEMI_BOLD:
			style['fontFamily'] = fontFamilySemiBold;
			break;
		case LIGHT:
			style['fontFamily'] = fontFamilyLight;
			break;
		case MEDIUM:
			style['fontFamily'] = fontFamilyMedium;
			break;
		default:
			style['fontFamily'] = fontFamily;
	}
	style['color'] = "#fff"; //color;
	/*switch (color) {
		case TEXT_COLOR_WHITE:
			style["color"] = theme.colors.textColorWhite;
			break;
		case TEXT_COLOR_BLACK:
			style["color"] = theme.colors.textColorBlack;
			break;
		case TEXT_COLOR_GRAY_1:
			style["color"] = theme.colors.textColorGray1;
			break;
		case TEXT_COLOR_GRAY_2:
			style["color"] = theme.colors.textColorGray2;
			break;
		case TEXT_COLOR_GRAY_3:
			style["color"] = theme.colors.textColorGray3;
			break;
		case TEXT_COLOR_GRAY_4:
			style["color"] = theme.colors.textColorGray4;
			break;
		case TEXT_COLOR_GRAY_5:
			style["color"] = theme.colors.textColorGray5;
			break;
		default:
			break;
	}*/

	return style;
};

const styles = {
	container: {
		backgroundColor: 'red',
		padding: 10,

	},
	text: (type, weight, color, theme) => ({
		...getTextStyle(type, weight, color, theme),
	}),
};

TextAvatar.propTypes = {
	type: PropTypes.oneOf([HEADING, SUB_HEADING, BODY, LABEL, CAPTION]),
	weight: PropTypes.oneOf([NORMAL, SEMI_BOLD, BOLD, LIGHT, MEDIUM]),
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	color: PropTypes.oneOf([TEXT_COLOR_WHITE,
		TEXT_COLOR_BLACK,
		TEXT_COLOR_GRAY_1,
		TEXT_COLOR_GRAY_2,
		TEXT_COLOR_GRAY_3,
		TEXT_COLOR_GRAY_4,
		TEXT_COLOR_GRAY_5]),
};

TextAvatar.defaultProps = {
	type: BODY,
	weight: MEDIUM,
	style: {},
	color: TEXT_COLOR_BLACK,
	text: 'AA',

};

export {TextAvatar};
