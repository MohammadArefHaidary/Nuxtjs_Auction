<template>
  <div>

	    <v-tabs
        background-color="#FFFFEA"
        slider-color="#C89933"
        optional
        right
        active-class="active"

        >

        <v-tab
          class="normalize font-weight-bold "
          to="/tab1"
          >
          Tab 1
        </v-tab>          

        <v-tab    
          class="normalize font-weight-bold"
          to="/tab2"
          >
          Tab 2
        </v-tab>   

        <v-tab
          class="normalize font-weight-bold"
          to="/tab3"
          >
          Tab 3
        </v-tab>
  
          
      </v-tabs>

  <Button
    v-bind:class="{'white': !clicked, 'blue': clicked}"
    v-on:click ="clicked = !clicked"
  ></Button>


  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
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
  name: "about",
};
</script>

<style>
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