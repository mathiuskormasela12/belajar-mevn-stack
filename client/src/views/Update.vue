<template>
	<div>
		<Navbar />
		<Form :form="form"/>
	</div>
</template>

<script>
	
	import Navbar from "@/components/Navbar.vue"
	import Form from "@/components/Form2.vue"
	import PostService from "@/service/PostService"

	export default {
		name: 'Update',
		components: {
			Navbar,
			Form
		},
		data() {
			return {
				form: {
					success: '',
					message: '',
					title: '',
					published: false,
					description: '',
					sendForm: this.sendForm,
					id: null
				}
			}
		},
		mounted() {
			this.getPostById()
		},
		methods: {
			getPostById() {
				this.form.id = this.$route.params.id

				PostService.getOneById(this.form.id)
				.then(response => {
						this.form.title = response.data.results[0].title 
						this.form.description = response.data.results[0].description
						this.form.published = response.data.results[0].published
				})
				.catch(err => {
					console.log(err)
				})
			},
			sendForm() {
				console.log(this.form.published)
				PostService.updatePost({ id: this.form.id, title: this.form.title, description: this.form.description, published: this.form.published.toString() })
				.then(response => {
					this.form.message = response.data.message
					this.form.success = true

					setTimeout(() => {
						this.form.message = null
						this.form.success = null
						this.$router.push({ name: 'Home' })
					}, 3000)

				})
				.catch(err => {
					this.form.message = 'Gagal'
					this.form.success = false
					console.log(err)

					setTimeout(() => {
						this.form.message = null
						this.form.success = null
						this.$router.push({ name: 'Home' })
					}, 3000)
				})
			}
		}
	}	

</script>