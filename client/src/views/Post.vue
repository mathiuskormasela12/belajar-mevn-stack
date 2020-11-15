<template>
	<div>
		<Navbar />
		<Form :form="form"/>
	</div>
</template>

<script>
	
	import Navbar from "@/components/Navbar.vue"
	import Form from "@/components/Form.vue"
	import PostService from "@/service/PostService"

	export default {
		name: 'Post',
		components: {
			Navbar,
			Form
		},
		data() {
			return {
				form: {
					title: undefined,
					description: undefined,
					published: undefined,
					sendForm: this.sendForm,
					success: undefined,
					message: undefined,
					id: null
				}
			}
		},
		methods: {
			sendForm() {
				console.log(this.form.published)
				PostService.createPost(this.form)
				.then(response => {
					this.form.success = true
					this.form.message = response.data.message

					this.$router.push('/')
				})
				.catch(err => {
					console.log(err)
					this.form.success = false
					this.form.message = 'Data gagal ditambahkan'
				})

			}
		}
	}

</script>