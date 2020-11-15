// ======= Get All Post Model Js
const db = require('./database');

function getAllPostModel(message) {

	db.query('SELECT * FROM posts ORDER BY title ASC', (err, data) => {

		if(err) 
			message(null, 'Web Service Error', 500)
		else
			message(data, `Fetch ${data.length} data`, 200);

	})

}

module.exports = getAllPostModel