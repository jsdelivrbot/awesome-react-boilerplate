import axios from 'axios';
import { FETCH_POSTS, CREATE_POST, INITIAL_STATE } from './actions_types';
import request from '../../utiles/requests';
import { REDUXBLOG_ROOT_URL } from '../../api';

const API_KEY = 'refaelok';

export function initialState () {
    return {
        type: INITIAL_STATE,
        payload: null
    };
}


export function fetchPosts () {
    const response = request('get', `${REDUXBLOG_ROOT_URL}/posts`, { key: API_KEY });

    return {
        type: FETCH_POSTS,
        payload: response
    };
}

export function createPost(props) {
    const response = request('post', `${REDUXBLOG_ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        payload: response
    }
}