<template>
  <div>
    <div class="container">
        <div style="display: flex;background-color: blue;justify-content: space-evenly;flex-direction: row-reverse;">

            <div style="background-color: blanchedalmond;width: 427px;height: 500px;display: flex;flex-direction: column;direction: rtl;align-items: center;padding: 41px;">
                <h1>یک مجموعه استندرد ایجاد کنید</h1>
                <p>مشتری باید بتواند خدمات مشتری را دنبال کند.
                     با کار حال، شایسته یا فاسد را به گشودن خطا هدایت می کنیم؟
                     من مشکلاتی را که مانع زندگی شایسته ترین است توضیح خواهم داد،
                      مراقبت از آنها به نرمی، وظایف، فرار نمی دانم؟</p>
                <label class="large-label" for="your-name">
                نام مجموعه
                <input id="your-name" name="your-name" type="text" />
                </label>
                <label class="large-label" for="your-symbol">
                سمبول مجموعه
                <input id="your-name" name="your-symbol" type="text" />
                </label>
            </div>
            <div style="width: 292px;height: 349px;background-color: beige;">
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "create",
};
</script>

<style scoped>
body {
  background-color: #80808024;
}
</style>