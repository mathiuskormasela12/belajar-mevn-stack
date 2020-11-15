// ======= Get Some Post Js
const db = require('./database')

function getSomePost(keyword, message) {

	const sql = `SELECT * FROM posts
	             WHERE
	             title LIKE '%${keyword}%' OR
	             description LIKE '%${keyword}%'`;

	db.query(sql, (err, data) => {
		if(err) {
			console.log(err);
			message(null, 'Web Service Error', 500)
		} else if( data.length < 1 ) {
			message(null, 'Keyword not found', 200)
		} else {
			message(data, `Fetch ${data.length} posts`, 200)
		}
	})

}

module.exports = getSomePost