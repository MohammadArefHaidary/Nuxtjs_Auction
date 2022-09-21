<template>
  <div class="card" :id="id">
    <a href="#"><img class="img-fluid card-img-top" :src="require(`~/assets/images/${image.src}`)" :alt="image.alt"
        :width="image.width" :height="image.height" style="height: 24rem;">

    </a>
    <div class="hover-image">
      <a href="" class="test">آرزوها</a>
      <h1 class="test">آرزوها#20</h1>
    </div>
    <div class="card-body" dir="rtl">
      <div style="color: black;direction:ltr"><a>@arefhaidary</a></div>
      <div class="bed-time">
        <div>مزایده در حال جریان</div>
        <div>مدت باقی مانده</div>
      </div>
      <div class="bed-time">
        <div>0.05 eth</div>
        <div>
          4س6د2ث
        </div>
      </div>

    </div>
  </div>


</template>

<script>
export default {
  name: "card2",
  props: {
    id: "",
    image: {
      src: "",
      alt: "",
      //   width: "",
      //   height: "",
    },
    heading: "",
    link: {
      url: "",
      title: "",
      anchor: "",
    },
  },
};
</script>
