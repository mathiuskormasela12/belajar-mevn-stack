// ======= Add Post Model Js
const db = require('./database');

function addPostModel( { title, description, published }, message) {

	published = published == 'true' ? true : false

	db.query('INSERT INTO posts SET ?', { title, description, published }, (err, data) => {

		if(err) {
			console.log(err);
			message(null, 'Web Service Error', 500);
		}

		else {
			message(null, 'Post success', 200);
		}

	});

}

module.exports = addPostModel;