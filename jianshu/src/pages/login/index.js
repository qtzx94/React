import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';

class Login extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号" ref={(input) => {this.account = input}} />
                    <Input placeholder="密码" type="password" ref={(input) => {this.password = input}} />
                    <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    login(accountElem, passwordElem) {
        console.log(accountElem, passwordElem);
    }
})

export default connect(null, mapDispatchToProps)(Login);