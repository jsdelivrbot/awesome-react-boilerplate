const {Router} = require('express');

const controller = require('./user.controller');
// const {authenticate} = require('./../../middleware/authenticate');
const {authenticate} = require('./../../middleware/authenticate-sequelize');
var router = new Router();

/**
 * @api {post} /post create
 * @apiName CreateUserToken
 * @apiGroup User
 *
 * @apiParam {String} email .
 * @apiParam {String} password .
 *
 * @apiSuccess {Object} - set header x-auth with generated token.
 */
router.post('/', controller.create);
/**
 * @api {get} /me get
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {Object} - get current user.
 */
router.get('/me', authenticate, controller.me);
/**
 * @api {delete} /me/token logout
 * @apiName LogoutUser
 * @apiGroup User
 *
 * @apiSuccess {Object} - status 200.
 */
router.delete('/me/token', authenticate, controller.logout);
/**
 * @api {post} /login 
 * @apiName LoginUser
 * @apiGroup User
 
 * @apiParam {String} email .
 * @apiParam {String} password .
 
 * @apiSuccess {Object} - set header x-auth with generated token.
 */
router.post('/login', controller.login);

module.exports = router;