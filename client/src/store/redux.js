import { createStore, combineReducers } from 'redux';

import reducer_Register from '../store/Reducers/reducer_Register';
import searchReducers from '../store/Reducers/searchReducers';


let  redusers = combineReducers({ reducer_Register,searchReducers });

let store = createStore(redusers)



export default store;