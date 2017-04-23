/**
 * Main application routes
**/

const baseAPI = '/api';
exports.default = function(app) {



app.use(baseAPI+'/posts', require('../api/posts'));
    app.use(baseAPI+'/posts-mysql', require('../api/posts-mysql'));

app.use(baseAPI+'/items', require('../api/items'));
// LASTLINE

}