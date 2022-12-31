<template>
  <div>
    <h1>
        About Us
    </h1>
  <div class="container">
		<div class="row">
			<div class="col">
				<h1>My Favorite Meals <span>(1)</span></h1>
				<hr>

				<ul id="list">
					<li>Spaghetti</li>
					<li class="selected">Curry &amp; Rice</li>
					<li>Burrito</li>
					<li>Soup</li>
					<li>Something Else</li>
				</ul>
			</div>
		</div>
	</div>

  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style>
li {
  cursor: pointer;
  /* Change cursor */
}

li.selected {
  /* Change background color of selected li */
  background-color: lightgreen;
}
</style>