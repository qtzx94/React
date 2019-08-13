import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // 避免每次父组件render函数执行时导致的子组件render函数执行
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true;
        }
        return false;
    }
    
    render() {
        console.log('child render');
        const { content } = this.props;
        return (
            // JSX -> React.createElement -> 虚拟DOM (JS对象) -> 真实DOM
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }

    // 一个组件要从父组件接收参数，只要父组件的render函数被重新执行了，子组件的这个生命周期函数就被执行
    UNSAFE_componentWillReceiveProps() {
        console.log('child componentWillReceiveProps');
    }

    // 当组件即将从页面中剔除时，执行
    componentWillUnmount() {
        console.log('child componentWillUnmount');
    }
}

// 传值校验
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;