import { combineReducers } from 'redux'
import newsArticleReducers from './newsArticleReducers'

export default combineReducers({
  newsArticles: newsArticleReducers
})