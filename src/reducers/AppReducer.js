import { createStore, combineReducers, applyMiddleware } from 'redux';

import ColorReducer from './ColorReducer';
import NavReducer from './NavReducer';
import apiReducer from './APIReducer';

//redux-thunk is a middelware which handle async operation in action
import thunk from 'redux-thunk';
import { defaultState } from '../constants/misc';


//combine all reducers to use them in compont
//we can use reducer in component with these 'KEY'
const store = combineReducers({
    color: ColorReducer,
    nav: NavReducer,
    api: apiReducer // here api is 'KEY'
});

const AppReducer = createStore(
	store,
	defaultState,
    applyMiddleware(thunk)
);

export default AppReducer;