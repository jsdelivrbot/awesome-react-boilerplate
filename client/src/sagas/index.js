import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from '../actions';


 /* --------- Temp start --------- */

import { REDUXBLOG_ROOT_URL } from '../api';
import request from '../utiles/requests';

const API_KEY = 'refaelok';
const POSTS_URL = `${REDUXBLOG_ROOT_URL}dd/posts`;

function* fetchPosts() {

    const config = {
        method: 'get',
        url: POSTS_URL,
        params: {key: API_KEY}
    };

    try {
        const response = yield call(request, config);
        yield put({type: ActionTypes.FETCH_POSTS_SUCCESS, posts: response.data});
    } catch (e) {
        yield put({type: ActionTypes.FETCH_POSTS_ERROR, response: e});
    }
}

/* --------- Temp end --------- */


export default function* () {
    yield [
        takeLatest(ActionTypes.FETCH_POSTS, fetchPosts)
    ]
}