// ======= Delete One Post
const db = require('./database')

function deleteOnePost(id, message) {

	db.query('DELETE FROM posts WHERE id = ?', [id], err => {
		if(err) {
			console.log(err)
			message(null, 'Web Service Error', 500)
		}
		else  {
			message(null, 'One post has been deleted', 200)
		}
	})

}

module.exports = deleteOnePost