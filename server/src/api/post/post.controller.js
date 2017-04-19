/**
 * Using Rails-like standard naming convention for endpoints.
 * POST    /post               ->  create
 * GET     /post               ->  getAll
 * GET     /post /:id          ->  getByID
 * DELETE  /post /:id          ->  removeByID
 * PATCH   /post /:id          ->  updateByID
 */

const _ = require('lodash');
const {ObjectID} = require('mongodb');
const GLOBAL_RESPONSES = require("../global/responses");
const LOCAL_RESPONSES = require("./responses");
const MODEL_PATH = './model/post';
const MODEL_SERVICE = require(MODEL_PATH);


exports.create = function(req, res) {
    let ModelInstance = new MODEL_SERVICE();
    ModelInstance.name = req.body.name;  // set the bears name (comes from the request)
    ModelInstance.save().then((post ) => {
        let resultResponse = GLOBAL_RESPONSES.CREATE_SUCCESS;
        resultResponse.resourceId = post._id;
        res.json({resultResponse});
    }).catch((e) => {
        res.send(e);
    });
};


exports.getAll = function (req, res) {
	MODEL_SERVICE.find((err,post_result) => {
        if(err){
            res.json(err);
        }
		res.json(post_result);
	}).catch((e) => {
        res.json(e);
    });
}


exports.getByID = function (req, res) {
	MODEL_SERVICE.findById(req.params.post_id).then((post) =>  {
        if(!post){
            res.json(LOCAL_RESPONSES.POST_NOT_FOUND);
        }
		res.json(post);
	}).catch((err) => {
        res.send(err);
    });
}


exports.removeByID = function (req, res) {
    MODEL_SERVICE.remove({
			_id: req.params.post_id
	}).then((result) => {
        res.json(GLOBAL_RESPONSES.DELETE_SUCCESS);
	}).catch((err) => {
        res.send(err);
    });
}


exports.updateByID = function (req, res) {
    MODEL_SERVICE.findById(req.params.post_id).then((post) => {
            if(!post){
                res.json(GLOBAL_RESPONSES.NOT_FOUND);
            }
            post.name = req.body.name;
            post.save(function(err) {
				if (err)
					res.send(err);

				res.json(GLOBAL_RESPONSES.UPDATE_SUCCESS);
			});
    }).catch((err) => {
        res.send(err);
    });
}