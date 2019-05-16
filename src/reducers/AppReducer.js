// full code here --> https://github.com/bizz84/redux-navigation-color-picker
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ColorReducer from './ColorReducer';
import NavReducer from './NavReducer';

import apiReducer from './APIReducer';
import thunk from 'redux-thunk';
const store =  combineReducers({
	color: ColorReducer,
    nav: NavReducer,
    api: apiReducer // we'll use 'api' in component in state param
});

const AppReducer = createStore(
    store,
    applyMiddleware(thunk)
  );


// const AppReducer = combineReducers({
// 	color: ColorReducer,
//     nav: NavReducer,
//     api: apiReducer // we'll use 'api' in component in state param
// });

export default AppReducer;