import axios from 'axios';

export function getNewsArticles(newsType) {
    return dispatch => {
        axios.get('http://localhost:3001/newsArticles').then(data => {
            console.log(data)
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