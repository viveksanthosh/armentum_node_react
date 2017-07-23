import React from 'react';
import NewsArticle from './NewsArticle';
import 'bootstrap/dist/css/bootstrap.min.css'
export default ({ articles }) => (
    <div>
        {articles.map(article => <NewsArticle title={article.title} content={article.content} img={article.img} />)}
    </div>
)