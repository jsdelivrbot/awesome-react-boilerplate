import { FETCH_POSTS, CREATE_POST } from './actions_types';
import request from '../../utiles/requests';
import { REDUXBLOG_ROOT_URL } from '../../api';

const API_KEY = 'refaelok';
const POSTS_URL = `${REDUXBLOG_ROOT_URL}/posts`;

export function fetchPosts () {
    const response = request({
        method: 'get',
        url: POSTS_URL,
        params: {key: API_KEY}
    });

    return {
        type: FETCH_POSTS,
        payload: response
    };
}

export function createPost(props, sucessHandler, errorHandler) {
    const response = request({
        method: 'post',
        url: POSTS_URL,
        data: props,
        params: {key: API_KEY}
    }, sucessHandler, errorHandler);

    return {
        type: CREATE_POST,
        payload: response
    }
}
