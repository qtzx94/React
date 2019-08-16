import * as constants from './constants';
import { fromJS } from 'immutable';

// fromJS将对象转化成immutable对象
const defaultState = fromJS({
    focused: false,
    list: [] 
});

// reducer.js是一个纯函数
export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回新的对象，不会修改原来的对象
        return state.set('focused', true);
    }
    if(action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    if(action.type === constants.CHANGE_LIST) {
        return state.set('list', action.data);
    }
    return state;
}