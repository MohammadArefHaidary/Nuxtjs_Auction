import { ref, onMounted } from "vue";

// export const usePosts = () => {
//   const count = ref(0);

//   function increment() {
//     count.value++;
//   }

//   return { count, increment };
// };

export const usePosts = () => {
  const posts = ref([]);

  onMounted(() => {
    let response = [
      {
        uuid: "werwet4646yh",
        title: "untitled post",
        slug: "dfdf",
        teaser: null,
        body: null,
        published: true,
      },
    ];

    posts.value = response;
  });

  return {
    posts,
  };
};
