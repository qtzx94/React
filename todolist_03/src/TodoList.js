import React, { Component } from 'react';
import { connect } from 'react-redux';

// 无状态组件性能优于class TodoList extends Component{}写法
const TodoList = (props) =>  {
    // 解构赋值
    const { inputValue, changeInputValue, handleClick, list } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

// store里面的state映射到props的inputValue
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch映射到props中
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },

        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        }
    }
}

// TodoList和store连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList); // connect返回的是一个容器组件