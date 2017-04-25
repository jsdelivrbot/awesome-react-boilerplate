import { call, put } from 'redux-saga/effects';
import * as ActionTypes from '../../actions';

export function* fetchPosts(api) {

    try {
        const response = yield call(api.fetchPosts);
        yield put({type: ActionTypes.FETCH_POSTS_SUCCESS, posts: response.data});
    } catch (e) {
        yield put({type: ActionTypes.FETCH_POSTS_ERROR, errorMessage: e});
    }

}

export function* fetchPost(api, action) {

    try {
        const response = yield call(api.fetchPost, action.payload);
        yield put({type: ActionTypes.FETCH_POST_SUCCESS, post: response.data});
    } catch (e) {
        yield put({type: ActionTypes.FETCH_POST_ERROR, errorMessage: e});
    }

}

export function* createPost(api, action) {

    try {
        const response = yield call(api.createPost, action.payload);
        yield put({type: ActionTypes.CREATE_POST_SUCCESS, newPost: response.data});
    } catch (e) {
        yield put({type: ActionTypes.CREATE_POST_ERROR, errorMessage: e});
    }

}