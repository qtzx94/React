import { fromJS } from 'immutable';
import * as contans from './contants';

// fromJS将普通对象转化成immutable对象
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});

// reducer.js是一个纯函数
export default (state = defaultState, action) => {
    switch (action.type) {
        case contans.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        default:
            return state;
    }
}                                                                                                                                                                        