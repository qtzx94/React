import axios from 'axios';
import * as contants from './contants';

const changeHomeData = (result) => ({
    type: contants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    recommendList: result.recommendList,
    articleList: result.articleList
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        }).catch(()=>{
            console.log("error");
        })
    }
}