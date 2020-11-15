<template>
	<section>
		<Navbar />
		<SearchBar :form="formSearch"/>
		<DisplayData :posts="posts" :reGetAllPost="getAll"/>
	</section>
</template>

<script>
	import Navbar from "@/components/Navbar.vue"
	import SearchBar from "@/components/SearchBar.vue"
	import DisplayData from "@/components/DisplayData.vue"
	import PostService from "@/service/PostService"

	export default {
		name: 'Home',
		components: {
			Navbar,
			SearchBar,
			DisplayData
		},

		data() {
			return {
				posts: [],
				formSearch: {
					keyword: '',
					searchByKey: this.searchByKey
				}
			}
		},

		mounted() {
			this.getAll()
		},

		methods: {

			searchByKey() {
				PostService.getSomeByKey({ keyword: this.formSearch.keyword })
				.then(response => {
					this.posts = response.data.results
				})
				.catch(err => console.log(err))
			},

			getAll() {
				PostService.getAllPost()
				.then(response => {
					this.posts = response.data.results
				})
				.catch(err => console.log(err))
			}
		}
	}
</script>