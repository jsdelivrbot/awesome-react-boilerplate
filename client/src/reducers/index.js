import { combineReducers } from 'redux';
import PostReducer from './posts/reducer_posts';

const rootReducer = combineReducers({
    posts: PostReducer
});

export default rootReducer;
