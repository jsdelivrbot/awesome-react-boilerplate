/**
 * Here you add all the apis urls defenition
 */

import request from './requests';


export const REDUXBLOG_ROOT_URL = 'http://reduxblog.herokuapp.com/api';

const API_KEY = 'refaelok';

export default (baseURL = REDUXBLOG_ROOT_URL) => {

    return {

        fetchPosts: () => {
            return request({
                method: 'get',
                baseURL: baseURL,
                url: '/posts',
                params: {key: API_KEY}
            });
        },


        fetchPost: (id) => {
            return request({
                method: 'get',
                baseURL: baseURL,
                url: '/posts/' + id,
                params: {key: API_KEY}
            });
        },

        createPost: (data) => {
            return request({
                method: 'post',
                baseURL: baseURL,
                url: '/posts',
                data: data,
                params: {key: API_KEY}
            });
        }

    }

};