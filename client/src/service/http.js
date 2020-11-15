// class HTTP {

// 	constructor() {
// 		this.url = 'http://127.0.0.1:5432/api';
// 	}

// 	connect(url, method, data) {
			
// 		return fetch(this.url + url, {
// 			method,
// 			body: (data != null) ? JSON.stringify(data) : null,
// 			headers: {
// 				"Content-Type": "application/json"
// 			}
// 		}).then(response => response.json())
// 		  .then(response => response)

// 	}

// }

// export default new HTTP

import axios from 'axios'

export default axios.create({
	baseURL: 'http://127.0.0.1:5432/api',
	headers: {
		"Content-Type": "application/json"
	}
})