<template>
  <div>
    <div class="back_image " ></div>
    <div class="d-flex flex-direction-row-reverse justify-content-between align-items-center mg">
      <div style="z-index:1;margin-right:100px;">
        <img src="~/assets/images/pexels-photo-1448136.jpeg" alt=""  
        style="width:115px;height:115px;border-radius:50%;">
      </div>
      <div class="d-flex align-items-baseline justify-content-center"
       style="width:30px;height:30px;border-radius:50%;background-color:gray;z-index:1;margin-left:100px">
        ...
      </div>
    </div>

    <div class="d-flex justify-content-between flex-wrap">
      <div style="margin-right:100px;">
        <div>محمد</div>
        <div class="d-flex flex-row-reverse"><div style="margin-right:10px"><button class="btn_style">0*1233...1334</button></div><div><button class="btn_style">ادیت پروفایل</button></div></div>
        <div class="mt-2">دیزاینر</div>
        <div>وب دیزاینر</div>
      </div>
      <div style="margin-left:100px" class="d-flex mgr">
        <div >تعقیب کننده
          <p>100</p>
        </div>
        <div style="margin-right:10px"><div style="border-right: 1px solid #80808014;padding-right:13px;">تعقیب شونده
          <p>104</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5 mt-5 d-flex justify-content-center" dir="rtl">
      <div>
      <h1 class="d-flex justify-content-center">شما هنوز صاحب هیچ nft نیستید</h1>
      <p>با ایجاد اولین nft خود شروع کنید یا برای یافتن چیزی برای اضافه کردن مجموعه خود مرور کنید</p> 
      <div class="d-flex justify-content-center mt-3"><button class="btn_style">ایجاد</button><button class="btn_style ms-2">جستجو</button></div>
      </div>
    </div>


   </div>
</template>

<script>
export default {
  name: "profile",
};
</script>

<style scoped>
.dark {
  opacity: 30%;
}
.back_image {
  background-image: url("~/assets/images/pexels-photo-2225440.jpeg");
  padding-bottom: 100px;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 240px;
  z-index: -1;
  opacity: 77%;
}
.btn_style {
  background-color: white;
  border-radius: 22px;
  padding: 4px 11px;
}

.navbar {
  opacity: 40% !important;
}
</style>