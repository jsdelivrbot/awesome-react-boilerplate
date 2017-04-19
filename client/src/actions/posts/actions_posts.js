import * as ActionTypes from '../';


export function fetchPosts () {
    return {
        type: ActionTypes.FETCH_POSTS,
        payload: null
    };
}

export function createPost(props) {
    return {
        type: ActionTypes.CREATE_POST,
        payload: response
    }
}
