import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

const App = (
    // <Provider>内部子组件可以共享store数据，react-redux作用之一
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
