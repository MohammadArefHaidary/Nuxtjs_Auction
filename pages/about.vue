<template>
  <div>

  <div id="visa">
    <h1>Vue Visa Application</h1>
    <form>
      <label for="first name">First Name:</label>
      <input type="text" v-model.lazy="fName" required>
      <br>
      <label for="last name">Last Name:</label>
      <input type="text" v-model.lazy="lName" required>
      <br>
      <label for="country">Nationality:</label>
      <input type="text" v-model.lazy="country" required>
      <br>
      <label for="passport number">Passport Number:</label>
      <input type="text" v-model.lazy="pNumber" required>

      <label for="duration">Duration of stay:</label>
      <input type="text" v-model.lazy="duration" required>

      <h2>Preview Application Details</h2>
      <p>First Name: {{fName}}</p>
      <p>Last Name: {{lName}}</p>
      <p>Nationality: {{country}}</p>
      <p>Passport Number: {{pNumber}}</p>
      <p>Duration: {{duration}}</p>

    </form>
   </div>
 
</div>

	  

</template>

<script>
export default {
  name: "about",
  props: {
    msg: String,
  },
  data() {
    return {
      fName: "",
      lName: "",
      country: "",
      pNumber: "",
      duration: "",
    };
  },

  head() {
    return {
      title: "About Us - Nuxt.js",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About our company Nuxt.js ",
        },
      ],
    };
  },
};
</script>

<style>
.active {
  background-color: red;
}
.white {
  background-color: white;
  width: 200px;
  height: 200px;
}
.blue {
  width: 200px;
  height: 200px;
  background-color: blue;
}
</style>