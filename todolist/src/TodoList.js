import React, {Fragment} from 'react'; // Fragment占位符
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

class TodoList extends React.Component {
    
    constructor(props) {
        super(props);
        // 当组件的state或者props发生改变的时候，render函数就会重新执行; 当父组件render函数重新执行的时候，子组件render函数必定重新执行
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    // 在组件即将被挂载到页面的时刻自动执行 （挂载： 组件第一次放到页面上时）
    UNSAFE_componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('parent render');
        return (
            // JSX语法
            <Fragment>
                {/* Fragment是一个组件(首字母大写) */}
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        // 尽量别使用ref操作dom
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    // 组件挂载到页面之后，自动执行（ajax请求放在这里执行）
    componentDidMount() {
        console.log('componentDidMount');
        axios.get('/api/todolist')
            .then((res) => {
                this.setState(() => {
                    return {
                        list: res.data
                    }
                });
            })
            .catch(() => {alert('error')})
    }

    // 组件被更新之前，自动执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    // 组件被更新前执行，且在shouldComponentUpdate返回值为true时执行，如果返回值为false，则不会执行该生命周期函数
    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    // 组件更新完成后执行
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem 
                    // 不要使用index值作为key值，因为index值不稳定，会影响diff算法 （同层比对，key值比对）
                    key={item}
                    content={item} 
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange() {
        const value = this.input.value;
        // setState 异步好处，可以将多次临近的setState合并成一次，减少虚拟DOM比对次数，提高性能
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: '',
        }))
    }

    handleItemDelete(index) {
        // Immutable 不可变
        // state里面的属性不可变，所以使用拷贝数据        
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }
}

export default TodoList;