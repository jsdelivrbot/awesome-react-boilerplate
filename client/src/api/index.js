/**
 * Here you add all the apis urls defenition
 */


const REDUXBLOG_ROOT_URL = 'http://reduxblog.herokuapp.com/api';

const API_KEY = 'refaelok';
const POSTS_URL = `${REDUXBLOG_ROOT_URL}/posts`;


export default api = {

    fetchPosts: {
        method: 'get',
        url: POSTS_URL,
        params: {key: API_KEY}
    },

}
