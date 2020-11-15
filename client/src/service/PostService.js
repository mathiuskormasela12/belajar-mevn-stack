import http from "./http"

class PostService {

	getAllPost() {

		return http.get('/get-all-post')

	}

	getSomeByKey(data) {
		return http.post('/get-some', data)
	}

	getOneById(id) {
		return http.get('/get-post/' + id)
	}

	updatePost(data) {
		return http.put('/update', data)
	}

	createPost(data) {
		return http.post('/post', data)
	}

	removeOne(id) {
		return http.delete('/delete/' + id)
	}

	removeAll() {
		return http.delete('/delete-all')
	}

}

export default new PostService