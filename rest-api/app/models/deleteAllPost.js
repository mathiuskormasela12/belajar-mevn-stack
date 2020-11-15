// ====== deleteAllPost
const db = require('./database')

function deleteAllPost(message) {

	db.query('DELETE FROM posts', (err, data) => {
		if(err) {
			console.log(err);
			message('Web Service Error', 500)
		}
		else {
			message(`${data.affectedRows} posts has been deleted`, 200)
		}
	})

}

module.exports = deleteAllPost