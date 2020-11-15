<template>
	<div class="card mb-3">
		<div class="card-body">
			<h5 class="card-title">{{ data.title }}</h5>
			<p class="card-text">{{ data.description }}</p>
			<p class="text-muted">{{ (data.published === 1) ? 'Published' : 'Unpublished' }}</p>
			<button class="btn btn-danger mr-3" @click="remove(data.id)">Delete</button>
			<a class="btn btn-primary" v-bind:href="'/update/' + data.id">Update</a>
		</div>
	</div>
</template>

<script>

	// import PostService from "@/service/PostService"

	export default {
		name: 'Cards',
		props: ['data', 'remove']
		// data() {
		// 	return {
		// 		message: ''
		// 	}
		// },
		// methods: {
		// 	remove(id) {
		// 		PostService.removeOne(id)
		// 		.then(response => {
		// 			this.message = response.data.message
		// 		})
		// 	}
		// }
	}
</script>