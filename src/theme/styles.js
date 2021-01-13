import {StyleSheet} from 'react-native';


const defaultStyles = StyleSheet.create({
	flex1: {
		flex: 1,
	},
	row: {
		flexDirection: 'row',
	},
	rowCenter: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rowSpace: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	rowSpaceCenter: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},


	toggleContainerStyle: {
		width: 40,
		height: 24,
		borderRadius: 25,
		backgroundColor: '#fff',
		padding: 5,
	},
	toggleCircleStyle: {
		width: 18,
		height: 18,
		borderRadius: 9,
		backgroundColor: 'white', // rgb(102,134,205)
	},
	itemCenter: {
		alignItems: "center"
	},

	borderBottom:{
		borderColor: "#ddd",
		borderBottomWidth: 1
	},

	borderRight: {
		// flex: 1,
		borderRightWidth: 1,
		borderRightColor: "#ddd",

		// backgroundColor: "red"
	},


	topBasicSpace: {
		marginTop: 10,
	},
});

export default defaultStyles;
