import { fromJS } from 'immutable';
import { FETCH_POSTS } from '../../actions/posts/actions_types';

const INITIAL_STATE = fromJS({
    all: [],
    post: null
});

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
            
        case FETCH_POSTS:
            return state.set('all', action.payload.data);

        default:
            return state;
            
    }
}
