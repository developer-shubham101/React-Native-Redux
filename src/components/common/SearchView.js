import React, { useContext, useState } from 'react';
import { StyleSheet, View, ViewPropTypes, TouchableOpacity, Image, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { BOLD, SEMI_BOLD, Text } from './Text';
import { ThemeContext } from '../../theme';
import { Button } from './Button';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import defaultStyles from '../../theme/styles';
const SearchView = ({
	changeFromDate,
	changeToDate,
	onPressSearch,
	onPressSort,

	fromDate,
	toDate,

	arrangements,
}) => {
	const theme = useContext(ThemeContext);

	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	// const [fromDate, setFromDate] = useState(undefined);
	// const [toDate, setToDate] = useState(undefined);
	const [currentMode, setCurrentMode] = useState(undefined);
	const [defaultDate, setDefaultDate] = useState(new Date);

	const showDatePicker = (key, defaultDate) => {
		setDefaultDate(defaultDate);
		setCurrentMode(key);
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		console.warn("A date has been picked: ", date);
		if (currentMode == "from") {
			// setFromDate(date);
			changeFromDate(date);
		} else {
			// setToDate(date);
			changeToDate(date);
		}

		hideDatePicker();
	};

	return <View>
		<View style={[defaultStyles.rowSpaceCenter, styles.componentContainer]}>
			<View style={[defaultStyles.rowSpaceCenter, styles.dateContainer]}>
				<TouchableOpacity style={[defaultStyles.flex1, styles.fromDateTouch]} onPress={() => showDatePicker("from", fromDate)}>
					<Text>From</Text>
					<Text weight={BOLD}>{fromDate ? moment(fromDate).format('MM/DD/YYYY') : "Select"}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[defaultStyles.flex1, styles.toDateTouch]} onPress={() => showDatePicker("to", toDate)}>
					<Text>To</Text>
					<Text weight={BOLD}>{toDate ? moment(toDate).format('MM/DD/YYYY') : "Select"}</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={[styles.searchTouch, styles.buttonTouch]} onPress={onPressSearch}>
				<Image
					resizeMode="contain"
					style={{ width: 30, height: 30 }}
					source={require("./../../../assets/img/ic_search.png")}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.filterTouch, styles.buttonTouch]} onPress={onPressSort}>
				<Image
					resizeMode="contain"
					style={{ width: 30, height: 30 }}
					source={require("./../../../assets/img/ic_filter.png")}
				/>

			</TouchableOpacity>
		</View>

		<DateTimePickerModal
			isVisible={isDatePickerVisible}
			mode="date"
			date={defaultDate}
			onConfirm={handleConfirm}
			onCancel={hideDatePicker}
		/>

	</View>
};


const styles = StyleSheet.create({
	componentContainer: {
		padding: 10,
	},
	dateContainer: {
		flex: 1,
		padding: 10,
		backgroundColor: "#fff",
		borderRadius: 4,
	},

	fromDateTouch: {
		borderRightWidth: 1,
		borderColor: "#ddd"
	},
	toDateTouch: {
		marginLeft: 10,
	},
	buttonTouch: {
		padding: 13,
		backgroundColor: "#fff",
		borderRadius: 4,
		marginStart: 10,
	},
	searchTouch: {

	},
	filterTouch: {

	},
	buttonTitle: (theme) => ({


	}),
});

SearchView.propTypes = {

	changeFromDate: PropTypes.func.isRequired,
	changeToDate: PropTypes.func.isRequired,
	onPressSearch: PropTypes.func.isRequired,
	onPressSort: PropTypes.func.isRequired,
	
};

SearchView.defaultProps = {
	changeFromDate: () => { },
	changeToDate: () => { },
	onPressSearch: () => { },
	onPressSort: () => { },
};

export { SearchView };
