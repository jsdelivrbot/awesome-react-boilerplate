/**
 * Using Rails-like standard naming convention for endpoints.
 * POST    /users              ->  create
 * GET     /users/me           ->  me
 * DELETE  /users/me/logout    ->  logout
 * POST    /users/login        ->  login
 */

const _ = require('lodash');
const User = require('./user-model');



exports.create = function(req, res) {
    let UserInstance = User;
	var body = _.pick(req.body, ['email', 'password']);
    var user = UserInstance.build({
        email : req.body.email,
        password : req.body.password
    });
    
    UserInstance.sync({force: false}).then(function () {
      // Table created
      return user.preSave(() => {
        user.save({
        email : req.body.email,
        password : req.body.password
        }).then(() => {
          console.log(user);
		return user.generateAuthToken();
	    }).then((token) => {
          console.log("token "+token);
        res.header('x-auth', token).send(user);
	    }).catch((e) => {
            res.status(400).send(e.errors);
	    });
     });
  });
};

// Get the current user
exports.me = function(req, res) {
	res.send(req.user);
};

exports.login = function(req, res) {

	var body = _.pick(req.body, ['email', 'password']);
    
	User.findByCredentials(body.email, body.password).then((user) => {
		user.generateAuthToken().then((token) => {
            
			res.header('x-auth', token).send(user);
		});
	}).catch((e) => {
        
		res.status(400).send();
	});

};


exports.logout = function(req, res) {
    req.user.removeTokenLogout(req.token).then((result) => {
        res.status(200).send();
	}).catch((e) => {
        
		res.status(400).send();
	});
};