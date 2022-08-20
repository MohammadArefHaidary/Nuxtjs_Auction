<template>

<div>
   <product />
</div>
</template>

<script>

import product from '~/components/product.vue'

export default {
  name: 'IndexPage',
  components: { product },
      head() {
      return {
        title: 'Home Page',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Auction Website Home Page'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'Vue nuxt Home Page'
          }
        ]
      }
    }
}
</script>
