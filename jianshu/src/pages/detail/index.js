import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom' ;
import {
    DetailWrapper,
    Header,
    Content
} from './style';

class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

// withRouter(Detail) 让Detail组件有能力获取router里面的内容
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));