<template>
      <div class="container-fluid pro my-2" :id="id">
              <div
                class="d-flex"
                style="justify-content: space-between; align-items: center"
              >
                <div
                  style="
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                  "
                >
                  <div class="space">
                    <div>ضرب شده توسط {{username}}</div>
                    <div>{{date}} at {{time}}</div>
                  </div>
                  <a href="">
                    <div class="offer">
                      <img
                        :src="require(`~/assets/images/${image.src}`)"
                        alt=""
                        class="img-fluid"
                        style="border-radius: 50%"
                      />
                    </div>
                  </a>
                </div>
                <div style="display: flex">
                  <div style="margin-left: 10px">0.50 ETH</div>
                  <div>
                    <a
                      style="color: gray"
                      href="https://etherscan.io/tx/0xff18f03935d7d1eead522f52f11115b8c4a0cf8b8fdc2642a2d48c08e4fd3002"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View on Etherscan"
                      class="st--c-PJLV st--c-kFlVdX st--c-cvvxlb st--c-dRgmCk"
                      ><svg
                        class="svg-hover"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M14.9998 0H7.9998V2H12.5998L6.2998 8.3L7.6998 9.7L13.9998 3.4V8H15.9998V1C15.9998 0.4 15.5998 0 14.9998 0Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M14 16H1C0.4 16 0 15.6 0 15V2C0 1.4 0.4 1 1 1H5V3H2V14H13V11H15V15C15 15.6 14.6 16 14 16Z"
                          fill="currentColor"
                        ></path></svg
                    ></a>
                  </div>
                </div>
              </div>
            </div>
</template>

<script>
export default {
  name: "product_card",
  props: {
    id: "",
    username: "",
    time: "",
    date: "",
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
<style>
</style>