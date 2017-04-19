var {User} = require('./../api/users/user-model');

var authenticate = (req, res, next) => {
	var token = req.header('x-auth');

	User.findByToken(token).then((user) => {

		if(!user) {
			return new Promise((resolve, reject) => {
				reject();
			});
		}

		req.user = user;
		req.token = token;
		next();

	}).catch((e) => {

		res.status(401).send();
		
	});
};

module.exports = {authenticate}