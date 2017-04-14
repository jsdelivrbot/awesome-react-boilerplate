import { INITIAL_STATE, FETCH_POSTS, CREATE_POST } from '../../actions/posts/actions_types';

const INIT_STATE = { all: [], post: null, createPostSuccess: null };

export default function (state = INIT_STATE, action) {
    switch(action.type) {

        case INITIAL_STATE:
            return { ...state, createPostSuccess: null };

        case FETCH_POSTS:
            return { ...state, all: action.payload.data };

        case CREATE_POST:
            if(action.payload.request.status == 201)
                return { ...state, createPostSuccess: true };
            else
                return { ...state, createPostSuccess: false };

        default:
            return state;
    }
}