import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '刘亦菲再晒游客照，花式摆拍的她成为了景色中最亮眼的一处！',
    content: '<img src="https://upload-images.jianshu.io/upload_images/7385504-a8b446bf07a6769c?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp" /><p><b>刘亦菲自从拍完《花木兰》后就一直处于度假状态</b>，而且还经常会上线晒出一些自己的游客照，可以说是给自己放了一个大大的假期呀，不用再担心工作而是自由放松的在外面好好的游玩，而且还会时不时的在社交网站上晒出一些游客照，和粉丝分享自己的日常。</p><p>刘亦菲自从拍完《花木兰》后就一直处于度假状态，而且还经常会上线晒出一些自己的游客照，可以说是给自己放了一个大大的假期呀，不用再担心工作而是自由放松的在外面好好的游玩，而且还会时不时的在社交网站上晒出一些游客照，和粉丝分享自己的日常。</p><p>刘亦菲自从拍完《花木兰》后就一直处于度假状态，而且还经常会上线晒出一些自己的游客照，可以说是给自己放了一个大大的假期呀，不用再担心工作而是自由放松的在外面好好的游玩，而且还会时不时的在社交网站上晒出一些游客照，和粉丝分享自己的日常。</p><p>刘亦菲自从拍完《花木兰》后就一直处于度假状态，而且还经常会上线晒出一些自己的游客照，可以说是给自己放了一个大大的假期呀，不用再担心工作而是自由放松的在外面好好的游玩，而且还会时不时的在社交网站上晒出一些游客照，和粉丝分享自己的日常。</p>'
})

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}