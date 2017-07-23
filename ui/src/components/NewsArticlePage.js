import React from 'react';
import { connect } from 'react-redux'
import NewsArticle from './NewsArticle';
import * as actions from '../actions/newsArticlesActions';
import 'bootstrap/dist/css/bootstrap.min.css'

class NewsArticlePage extends React.Component {
    constructor(props) {
        super(props);
         this.props.dispatch(actions.getNewsArticles(this.props.location.pathname));
        this.state = {
            newsType: props.location.pathname
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
                console.log(this.props)

        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.dispatch(actions.getNewsArticles(nextProps.location.pathname));
        }
    }

    render() {
        console.log(this.props.articles)
        const articles = this.props.articles;
        return (
            <div>
                {articles.map(article => <NewsArticle key = {article.title} title={article.title} content={article.content} img={article.img} />)}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => (
    { articles: state.newsArticles }
)

export default connect(mapStateToProps)(NewsArticlePage)
