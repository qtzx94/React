import React from 'react';
import { Input, Button, List } from 'antd';

// 无状态组件(普通组件中只有一个render函数时可以使用无状态组件代替)写法
const TodoListUI = (props) => {
    return (
        <div style={{ marginTop: 10, marginLeft: 10 }}>
            <div>
                <Input 
                    value={props.inputValue} 
                    placeholder="todo info" 
                    style={{ width: 300, marginRight: 10 }} 
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{ marginTop: 10, width: 300 }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}

// UI组件写法
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{ marginTop: 10, marginLeft: 10 }}>
//                 <div>
//                     <Input 
//                         value={this.props.inputValue} 
//                         placeholder="todo info" 
//                         style={{ width: 300, marginRight: 10 }} 
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                 </div>
//                 <List
//                     style={{ marginTop: 10, width: 300 }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI;