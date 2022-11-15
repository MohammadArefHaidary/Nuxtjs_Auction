<template>
    <h1> {{ users }} </h1>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const users = ref([]);

    function getUsers() {
      axios

        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          users.value = response.data;
        });
    }
    getUsers();

    return { users };
  },
};
</script>