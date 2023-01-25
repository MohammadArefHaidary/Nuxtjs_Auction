<template>
  <div>
    <div class="container">
        <div style="display: flex;justify-content: space-evenly;flex-direction: row-reverse;">

            <div style="background-color: white;width:429px;height:500px;display: flex;flex-direction: column;direction: rtl;align-items: center;padding: 41px;border-radius: 12px;box-shadow: 0px 0px 3px;">
                <h1 style="font-size:1.5rem;">یک مجموعه استندرد ایجاد کنید</h1>
                <p class="mb-3">مشتری باید بتواند خدمات مشتری را دنبال کند.
                     با کار حال، شایسته یا فاسد را به گشودن خطا هدایت می کنیم؟
                     من مشکلاتی را که مانع زندگی شایسته ترین است توضیح خواهم داد،
                      مراقبت از آنها به نرمی، وظایف، فرار نمی دانم؟</p>
               <form>
                  <label for="fname">نام مجموعه</label>
                  <input type="text" id="fname" name="fname" required="required">
                  <label for="lname">سمبول مجموعه</label>
                  <input type="text" id="lname" name="lname" required="required">
                  <button style="background-color: #80808014;">ادامه</button>
                </form>
            </div>
            <div style="width: 268px;height: 363px;background-color: #8080800f;border-radius: 17px;box-shadow: 0px 0px 1px #000000f0;">
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  auth: true,
  name: "create",
  head() {
    return {
      title: "Create - Nuxt.js",
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

<style scoped>
body {
  background-color: #f3f2f1;
}
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 10px;
}
button {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 30px;
}
</style>