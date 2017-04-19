import { fromJS } from 'immutable';
import * as ActionTypes from '../../actions';

const INITIAL_STATE = fromJS({
    all: [],
    post: null
});

export default function (state = INITIAL_STATE, action) {

    switch(action.type) {
            
        case ActionTypes.FETCH_POSTS_SUCCESS:
            return state.set('all', action.posts);

        case ActionTypes.FETCH_POSTS_ERROR:
            return state.set('all', []);

        default:
            return state;
            
    }
}
