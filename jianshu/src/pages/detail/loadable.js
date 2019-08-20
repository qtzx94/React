import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    // 需要异步的组件（选择当前detail组件）
    loader: () => import('./'), 
    // 加载过程中显示的内容
    loading() {
        return <div>正在加载···</div>
    }
});

// 无状态组件
export default () => <LoadableComponent/>