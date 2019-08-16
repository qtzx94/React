import * as contants from './constants';

const defaultState = {
    focused: false 
};

// reducer.js是一个纯函数
export default (state = defaultState, action) => {
    if(action.type === contants.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if(action.type === contants.SEARCH_BLUR) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        return newState;
    }
    return state;
}