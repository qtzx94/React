const defaultState = {
    inputValue: '',
    list: []
};

// reducer 可以接收state，但是不能修改state，所以使用JSON.parse(JSON.stringify(state)) 实现对state数据深拷贝
export default (state = defaultState, action) => {
    if(action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === 'delete_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}