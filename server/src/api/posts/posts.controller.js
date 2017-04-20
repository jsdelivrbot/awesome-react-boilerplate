/**
 * Using Rails-like standard naming convention for endpoints.
 * POST    /posts               ->  create
 * GET     /posts               ->  getAll
 * GET     /posts /:id          ->  getByID
 * DELETE  /posts /:id          ->  removeByID
 * PATCH   /posts /:id          ->  updateByID
 */

const _ = require('lodash');
const {ObjectID} = require('mongodb');
const GLOBAL_RESPONSES = require("../global/responses");
const LOCAL_RESPONSES = require("./responses");
const MODEL_PATH = './model/posts';
const MODEL_SERVICE = require(MODEL_PATH);
const IGNORE_FIELDS = { '_id': 0,'__v':0};

exports.create = function(req, res) {
    let ModelInstance = new MODEL_SERVICE();
	MODEL_SERVICE.find({
			id: req.body.id
	},IGNORE_FIELDS).then((post) =>  {
		
		if(post && post.length > 0){
			res.json(LOCAL_RESPONSES.ALREADY_EXISTS);
		}
		
		ModelInstance.id = req.body.id;
		ModelInstance.content = req.body.content; 
		ModelInstance.categories = req.body.categories; 
		ModelInstance.title = req.body.title; 	
		ModelInstance.save().then((posts ) => {
			let resultResponse = GLOBAL_RESPONSES.CREATE_SUCCESS;
			resultResponse.resourceId = posts._id;
			res.json({resultResponse});
		}).catch((e) => {
			res.send(e);
		});
	}).catch((err) => {
        res.send(err);
    });
};


exports.getAll = function (req, res) {
	MODEL_SERVICE.find({},IGNORE_FIELDS).limit(40).exec(function(err, posts_result){
		if(err){
			res.json(err);
		}
		if(posts_result && posts_result.length == 0){
			res.json(LOCAL_RESPONSES.POSTS_NOT_FOUND);
		}
		res.json(posts_result);
	}).catch((e) => {
        res.json(e);
    });
}


exports.getByID = function (req, res) {
	MODEL_SERVICE.find({
			id: req.params.posts_id
	},IGNORE_FIELDS).then((posts) =>  {
        if(!posts || (posts && posts.length == 0)){
            res.json(LOCAL_RESPONSES.POSTS_NOT_FOUND);
        }
		
		res.json(posts);
	}).catch((err) => {
        res.send(err);
    });
}


exports.removeByID = function (req, res) {
    MODEL_SERVICE.remove({
			id: req.params.posts_id
	}).then((result) => {
        res.json(GLOBAL_RESPONSES.DELETE_SUCCESS);
	}).catch((err) => {
        res.send(err);
    });
}


