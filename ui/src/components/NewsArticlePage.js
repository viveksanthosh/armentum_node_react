import { Component } from 'react';
import NewsArticle from './NewsArticle';
import 'bootstrap/dist/css/bootstrap.min.css'
export default class extends Comment {
    render() {
        console.log(location)
        const articles = this.props.article;
        return (
            <div>
                {articles.map( => <NewsArticle title={article.title} content={article.content} img={article.img} />)}
            </div>
        )
    }
}