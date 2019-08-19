import React, { Component, Fragment } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class List extends Component {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <Fragment>
                {
                    list.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <img className="pic" alt="图片" src={item.get('imgUrl')}/>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);