import { takeLatest, takeEvery } from 'redux-saga/effects';
import createApi from '../api';
import * as ActionTypes from '../actions';
import { fetchPosts, createPost } from './posts/saga_posts'

const innorlate = createApi();

export default function* () {
    yield [
        takeLatest(ActionTypes.FETCH_POSTS, fetchPosts, innorlate),
        takeLatest(ActionTypes.CREATE_POST, createPost, innorlate),
    ]
}