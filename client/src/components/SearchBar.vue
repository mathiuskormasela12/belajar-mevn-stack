<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-md-7 offset-md-2">
				<form method="POST" v-on:submit.prevent="form.searchByKey">
					<div class="input-group mb-3">
						<input type="text" class="form-control" placeholder="Search a Post" v-model="form.keyword">
						<div class="input-group-append">
							<button class="btn btn-outline-secondary" type="submit">Search</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SearchBar',
		props: {
			form: Object
		}
	}

</script>