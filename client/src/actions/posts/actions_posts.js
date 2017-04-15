import { FETCH_POSTS, CREATE_POST } from './actions_types';
import request from '../../utiles/requests';
import { REDUXBLOG_ROOT_URL } from '../../api';

const API_KEY = 'refaelok';

export function fetchPosts () {
    const response = request('get', `${REDUXBLOG_ROOT_URL}/posts`, { key: API_KEY });

    return {
        type: FETCH_POSTS,
        payload: response
    };
}

export function createPost(props, sucessHandler, errorHandler) {
    const response = request('post', `${REDUXBLOG_ROOT_URL}/posts?key=${API_KEY}`, props, sucessHandler, errorHandler);

    return {
        type: CREATE_POST,
        payload: response
    }
}