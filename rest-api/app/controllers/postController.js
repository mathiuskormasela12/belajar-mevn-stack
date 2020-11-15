// ======= Post Controller Js
const addPostModel = require('../models/addPostModel');
const getAllPostModel = require('../models/getAllPostModel');
const getPostById = require('../models/getPostById');
const getSomePost = require('../models/getSomePost')
const updatePost = require('../models/updatePost');
const deleteOnePost = require('../models/deleteOnePost')
const deleteAllPost = require('../models/deleteAllPost')

exports.create = function(req, res) {
	
	if( !req.body.title || !req.body.description || !req.body.published ) {
		res.status(400).json({
			message: "Request can not be empty"
		});
		return;
	}

	addPostModel(req.body, (data, message, status) => {

		res.status(status).json({
			status,
			message
		});

	});

}

exports.findAll = function(req, res) {

	getAllPostModel((data, message, status) => {

		res.status(status).json({
			status,
			message,
			results: data
		})

	})

}

exports.findSome = function(req, res) {

 if( !req.body.keyword ) {
	res.status(400).json({
		status: 400,
		message: 'Keyword can not be empty',
		results: 0
	})
	return
 }

	getSomePost(req.body.keyword, (data, message, status) => {

		res.status(status).json({
			status,
			message,
			results: data
		})

	})

}

exports.findOne = function(req, res) {

	const id = req.params.id;

	getPostById(id, (data, message, status) => {
		res.status(status).json({
			status,
			message,
			results: data
		})
	})

}

exports.update = function(req, res) {

	const id = req.params.id;

	for( let x in req.body ) {
		if( !req.body[x] ) {
			res.status(400).json({
				status: 400,
				message: 'Request can not be empty'
			})
		}
	}

	updatePost( req.body, (message, status) => {
		res.status(status).json({
			status,
			message
		})
	} )

	console.log(req.body)

}

exports.deleteOne = function(req, res) {

	const id = req.params.id

	deleteOnePost(id, (data, message, status) => {
		res.status(status).json({
			status,
			message
		})
	})
}

exports.deleteAll = function(req, res) {

	deleteAllPost((message, status) => {
		res.status(status).json({
			status,
			message
		})
	})

}