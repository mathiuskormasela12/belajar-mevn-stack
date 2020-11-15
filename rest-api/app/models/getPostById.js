// ======= Get Post By Id Js
const db = require('./database');

function getPostById(id, message) {

	db.query('SELECT * FROM posts WHERE id = ?', [id], (err, data) => {
		if(err)
			message(null, 'Web Service Error', 500)
		else 
			message(data, `Fetch 1 post`, 200)
	})

}

module.exports = getPostById;