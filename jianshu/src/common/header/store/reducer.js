import * as contants from './constants';
import { fromJS } from 'immutable';

// immutable对象
const defaultState = fromJS({
    focused: false 
});

// reducer.js是一个纯函数
export default (state = defaultState, action) => {
    if(action.type === contants.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回新的对象，不会修改原来的对象
        return state.set('focused', true)
    }
    if(action.type === contants.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state;
}