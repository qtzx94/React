import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        // redux-sagas 作用是使得dispatch派发的action能在sagas.js文件中接收到
        const action = getInitList();
        store.dispatch(action);
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }
}

export default TodoList;