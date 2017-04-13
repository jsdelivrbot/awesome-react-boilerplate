import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './posts/reducer_posts';

const rootReducer = combineReducers({
    form: formReducer,
    posts: PostReducer
});

export default rootReducer;
