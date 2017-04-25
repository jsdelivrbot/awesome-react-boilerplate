import { takeLatest, takeEvery } from 'redux-saga/effects';
import createApi from '../api';
import * as ActionTypes from '../actions';
import * as sagasPosts from './posts/saga_posts'

const innorlate = createApi();

export default function* () {
    yield [
        takeLatest(ActionTypes.FETCH_POSTS, sagasPosts.fetchPosts, innorlate),
        takeLatest(ActionTypes.FETCH_POST, sagasPosts.fetchPost, innorlate),
        takeLatest(ActionTypes.CREATE_POST, sagasPosts.createPost, innorlate),
    ]
}