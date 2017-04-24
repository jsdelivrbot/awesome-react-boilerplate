/**
 * Main application routes
**/

const baseAPI = '/api';
exports.default = function(app) {


app.use(baseAPI+'/users', require('../api/users'));
app.use(baseAPI+'/users-sequelize', require('../api/users-sequelize'));
    
app.use(baseAPI+'/posts', require('../api/posts'));


// LASTLINE

}