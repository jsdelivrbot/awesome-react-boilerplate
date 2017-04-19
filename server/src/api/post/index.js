const {Router} = require('express');
const {authenticate} = require('./../../middleware/authenticate');

const controller = require('./post.controller');

var router = new Router();

/**
 * @api {post} /post create
 * @apiName CreatePost
 * @apiGroup Post
 *
 * @apiParam {String} name .
 *
 * @apiSuccess {Object} - contain message and resource id.
 */
router.post('/', controller.create);

/**
 * @api {get} /post all
 * @apiName GetAllPost
 * @apiGroup Post
 * @apiSuccess {Object} - contain items from resource.
 */
router.get('/',  controller.getAll);

/**
 * @api {get} /post/:id  get
 * @apiName GetPostById
 * @apiGroup Post
 *
 * @apiParam {String} id .
 *
 * @apiSuccess {Object} - resource.
 */
router.get('/:post_id',  controller.getByID);

/**
 * @api {delete} /post/:id  delete
 * @apiName RemovePostById
 * @apiGroup Post
 *
 * @apiParam {String} id .
 *
 * @apiSuccess {Object} - contain message.
 */
router.delete('/:post_id',  controller.removeByID);

/**
 * @api {put} /post/:id  update
 * @apiName UpdatePostById
 * @apiGroup Post
 *
 * @apiParam {String} id .
 *
 * @apiSuccess {Object} - contain message.
 */
router.put('/:post_id', controller.updateByID);

module.exports = router;