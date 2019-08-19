import styled from 'styled-components';

export const HomeWrapper = styled.div`  
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
    margin-left: 15px;
    padding-top: 30px;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    margin-left: -18px;
    overflow: hidden;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        float: right;
        display: block;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;
export const ListInfo = styled.div`
    float: left;
    width: 500px;
    .title {
        font-size: 18px;
        font-weight: bold;
        line-height: 27px;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    height: 280px;

`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props)=> props.imgUrl});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    width: 280px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    box-sizing: border-box;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;