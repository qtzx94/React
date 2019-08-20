import axios from 'axios';
import * as constants from './constants';

const getDetailData = (title, content) => ({
    type: constants.GET_DETAIL_DATA,
    title,
    content
});

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(getDetailData(result.title, result.content));
        }).catch(() => {
            console.log('error');
        })
    }
}