import axios from 'axios';
import { FETCH_POSTS, CREATE_POST } from './actions_types'
import { REDUXBLOG_ROOT_URL } from '../../api';

const API_KEY = '?key=refaelok'

export function fetchPosts () {
    const request = axios.get(`${REDUXBLOG_ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(props) {
    const request = axios.post(`${REDUXBLOG_ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        payload: request
    }
}