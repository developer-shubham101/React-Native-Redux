import { NavigationActions, StackActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

let navigator;

function setTopLevelNavigator(navigatorRef) {
	navigator = navigatorRef;
}

function navigate(routeName, params) {
	navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		}),
	);
}
function pop(n = 1) {
	navigator.dispatch(
		StackActions.pop({
			n: n
		}),
	);
}

function goBack() {
	navigator._navigation.goBack();
}
function openDrawer() {
	navigator.dispatch(
		DrawerActions.openDrawer()
	);
}
function closeDrawer() {
	navigator.dispatch(
		DrawerActions.closeDrawer()
	);
}
// add other navigation functions that you need and export them

export default {
	goBack,
	navigate,
	setTopLevelNavigator,
	openDrawer,
	closeDrawer,
	pop
};
