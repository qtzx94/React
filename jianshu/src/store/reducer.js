import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';
 

// combineReducers 用来合并reducer
const reducer =  combineReducers({
    header: headerReducer
});

export default reducer;