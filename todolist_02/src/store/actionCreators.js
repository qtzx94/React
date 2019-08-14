import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from "./actionTypes";
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    // redux-thunk中间件作用是可以在action中写异步代码
    return (dispatch) => {
        // Charles配置项里面Path的后缀一定要写完整 /api/list.json，然后配置项里面Host使用localhost.charlesproxy.com，最后浏览器访问http://localhost.charlesproxy.com:3000就可以成功访问到
        axios.get('/api/list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        })
    }
}