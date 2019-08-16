import { fromJS } from 'immutable';

// fromJS将普通对象转化成immutable对象
const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "社会热点",
        imgUrl: "https://upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        id: 2,
        title: "手绘",
        imgUrl: "https://upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    }]
});

// reducer.js是一个纯函数
export default (state = defaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}                                                                                                                                                                        