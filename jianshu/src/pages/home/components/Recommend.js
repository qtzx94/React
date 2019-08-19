import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    RecommendWrapper,
    RecommendItem
} from '../style'

class Recommend extends Component {
    render() {
        const { imgUrl } = this.props;
        return (
            <RecommendWrapper>
                {
                    imgUrl.map((item) => {
                        return (
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    imgUrl: state.getIn(['home', 'recommendList'])
})

export default connect(mapStateToProps)(Recommend);