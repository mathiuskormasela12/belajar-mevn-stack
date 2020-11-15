<template>
	<div class="container mt-3">
		<div class="row">
			<div class="col-md-10 offset-md-1 mb-3">
				<div class="alert alert-success" v-if="message.length > 0">
					{{ message }}
				</div>
			</div>
			<div class="col-md-10 offset-md-1 mb-3">
				<button class="btn btn-danger" @click="removeAll">Remove All Post</button>
			</div>
			<div class="col-md-10 offset-md-1" v-for="(post, index) in posts" :key="index">
				<Cards :data="post" :remove="removeMethod"/>
			</div>
		</div>
	</div>
</template>

<script>
	import Cards from "@/components/Cards.vue"
	import PostService from "@/service/PostService"
	
	export default {
		name: 'DisplayData',
		props: {
			posts: Array,
			reGetAllPost: Function,
			keyword: String
		},
		components: {
			Cards
		},
		data() {
			return {
				removeMethod: this.remove,
				message: '',
				id: ''
			}
		},
		methods: {
			removeAll() {
				PostService.removeAll()
				.then(response => {
					this.message = response.data.message
					this.reGetAllPost()
				})
			},
			remove(id) {
				this.id = id
				PostService.removeOne(id)
				.then(response => {
					this.message = response.data.message
					this.reGetAllPost()

					setTimeout(() => {
						this.message = ''
					}, 3000)

				})
			}
		}
	}
</script>

