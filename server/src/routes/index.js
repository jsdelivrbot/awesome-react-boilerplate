/**
 * Main application routes
**/

const baseAPI = '/api';
exports.default = function(app) {



app.use(baseAPI+'/posts', require('../api/posts'));
// LASTLINE

}