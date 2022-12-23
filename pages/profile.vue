<template>
  <div>
    <div class="d-flex flex-direction-row-reverse justify-content-between align-items-center" 
    style="margin-top:-88px;">
      <div style="z-index:1;margin-right:100px;">
        <img src="~/assets/images/pexels-photo-1448136.jpeg" alt=""  
        style="width:115px;height:115px;border-radius:50%;">
      </div>
      <div class="d-flex align-items-baseline justify-content-center"
       style="width:30px;height:30px;border-radius:50%;background-color:gray;z-index:1;margin-left:100px">
        ...
      </div>
    </div>

    <div class="d-flex justify-content-between">
      <div style="margin-right:100px;">
        <div>محمد</div>
        <div class="d-flex flex-row-reverse"><div style="margin-right:10px"><button class="btn_style">0*1233...1334</button></div><div><button class="btn_style">ادیت پروفایل</button></div></div>
        <div class="mt-2">دیزاینر</div>
        <div>وب دیزاینر</div>
      </div>
      <div style="margin-left:100px" class="d-flex">
        <div >تعقیب کننده
          <p>100</p>
        </div>
        <div style="margin-right:10px"><div style="border-right: 1px solid #80808014;padding-right:13px;">تعقیب شونده
          <p>104</p>
          </div>
        </div>
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
.btn_style {
  background-color: white;
  border-radius: 22px;
  padding: 4px 11px;
}
</style>