import axios from 'axios';

export function getNewsArticles(newsType) {
    return dispatch => {
        axios.get('http://localhost:3001/newsArticles' + newsType.toLowerCase()).then(data => {
            dispatch(newsArticleAction(data.data));
        })
    }
}

function newsArticleAction(data) {
    return {
        data,
        type: "GET_ARTICLES"
    };
}