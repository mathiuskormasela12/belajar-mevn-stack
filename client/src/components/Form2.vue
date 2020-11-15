<template>
	<div class="container mt-4">
		<div class="row">
			<div class="col-md-12 mb-2">
				<h3>Create A Post</h3>
			</div>
			<div class="col-md-12" v-if="form.success === true">
				<div class="alert alert-primary" role="alert">
					{{ form.message }}
				</div>
			</div>
			<div class="col-md-12" v-else-if="form.success === false">
				<div class="alert alert-danger" role="alert">
					{{ form.message }}
				</div>
			</div>
			<div class="col-md-12">
				<form method="POST" v-on:submit.prevent="form.sendForm">
					<div class="form-group">
						<label for="title">Title</label>
						<input type="text" class="form-control" id="title" v-model="form.title">
						<input type="hidden" v-model="form.id">
					</div>
					<div class="form-group">
						<label for="description">Description</label>
						<textarea id="description" cols="30" rows="5" class="form-control" v-model="form.description"></textarea>
					</div>
					<div class="form-group">
						<label for="publish">Publish</label>
						<select class="custom-select mr-sm-2" id="publish" v-if="form.published == 1" v-model="published">
							<option disabled>Choose...</option>
							<option value="true" selected>Published</option>
							<option value="false">UnPublished</option>
						</select>
						<select class="custom-select mr-sm-2" id="publish" v-else v-model="unpublished">
							<option disabled>Choose...</option>
							<option value="true">Published</option>
							<option value="false" selected>UnPublished</option>
						</select>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'Form',
		props: {
			form: Object
		},
		data() {
			return { published: 'true', unpublished: 'false' }
		},
		watch: {
			published(val) {
				this.form.published = val
			},
			unpublished(val) {
				this.form.published = val
			}
		}
	}

</script>