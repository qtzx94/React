import { createStore } from 'redux';
import reducer from './reducer';

// store是唯一的
// 只有store能够改变自己的内容
const store = createStore(
    reducer,
    // 配置redux_devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;