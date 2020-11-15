// ======= Pages Js
const express = require('express');
const postController = require('../controllers/postController');

// init router
const router = express.Router();

router.get('/', (req, res) => {
	res.json({
		message: "Welcome to our Rest Api"
	})
});

router.post('/post', postController.create)
router.get('/get-all-post', postController.findAll)
router.get('/get-post/:id', postController.findOne)
router.post('/get-some', postController.findSome)
router.put('/update', postController.update)
router.delete('/delete/:id', postController.deleteOne)
router.delete('/delete-all', postController.deleteAll)

module.exports = router;