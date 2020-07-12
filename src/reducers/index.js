import {combineReducers} from 'redux';
import articles from './articlesReducer';
import article from './articlesReducer';

export default combineReducers({
    articles:articles,
    article:article,
})