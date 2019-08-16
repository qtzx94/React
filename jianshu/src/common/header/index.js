import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { IconfontStyle } from '../../statics/iconfont/iconfont';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    Addition,
    Button
} from './style';


class Header extends Component {

    // 隐藏显示搜索列表
    getListArea() {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {this.props.list.map((item) => {
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })}
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
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
                                in={this.props.focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                    className={this.props.focused ? 'focused' : ''}
                                    onFocus={this.props.handleInputFocus}
                                    onBlur={this.props.handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</span>
                            {/* 隐藏显示搜索列表 */}
                            {this.getListArea()}
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
}

const mapStateToProps = (state) => {
    return {
        // 引入redux-immutable后，state也变成了immutable对象
        focused: state.getIn(['header', 'focused']), // state.get('header').get('focused')
        list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}


// connect返回的是容器组件，负责页面逻辑，处理数据
export default connect(mapStateToProps, mapDispatchToProps)(Header);