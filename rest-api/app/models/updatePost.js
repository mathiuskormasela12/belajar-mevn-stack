// ======= Update Post Js
const db = require('./database');

function updatePost({ title, description, published, id }, message) {

	published = (published === 'true') ? true : false

	db.query('UPDATE posts SET ? WHERE id = ?', [{ title, description, published }, id], (err, data) => {

		if(err) {
			console.log(err)
			message('Web Service Error', 500)
		}
		else {
			message('Post updated', 200)
		}

	})

}

module.exports = updatePost