import { FETCH_POSTS, CREATE_POST } from '../../actions/posts/actions_types';

const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {

        case INITIAL_STATE:
            return { ...state, createPostSuccess: null };

        case FETCH_POSTS:
            return { ...state, all: action.payload.data };

        default:
            return state;
    }
}