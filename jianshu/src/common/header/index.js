import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { IconfontStyle } from '../../statics/iconfont/iconfont';
import { 
    HeaderWrapper ,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style';

// 无状态组件，负责页面样式
const Header = (props) => {
    return (
        <Fragment>
            <IconfontStyle />
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            // in 用来控制入场和出场动画
                            in={props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={props.focused ? 'focused' : ''}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</span>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <span className="iconfont">&#xe624;</span>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
         
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}


// connect返回的是容器组件，负责页面逻辑，处理数据
export default connect(mapStateToProps, mapDispatchToProps)(Header);