<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
			<a class="navbar-brand" href="#">Belajar MEVN</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<router-link class="nav-item nav-link active" to="/">
						Home 
						<span class="sr-only">(current)</span>
					</router-link>
					<router-link class="nav-item nav-link" to="/post">
						Post
					</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script type="text/javascript">
	export default {
		name: 'Navbar',
	}
</script>