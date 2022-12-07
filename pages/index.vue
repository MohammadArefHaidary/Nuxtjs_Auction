<template>

<div>
  <client-only>
   <Home />
   </client-only>
</div>
</template>

<script>
import Home from "~/components/Home.vue";

export default {
  name: "IndexPage",
  components: { Home },
  head() {
    return {
      title: "Home Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Auction Website Home Page",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Vue nuxt Home Page",
        },
      ],
    };
  },
};
</script>
