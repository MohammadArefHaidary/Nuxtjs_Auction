<template>
  <div>
    <div class="main-mobile-nav">
      <div class="mobile-nav">
        <i class='fas fa-arrow-right'></i>
        <input/>
      </div>

      <div class="mobile-links">

        <div class="upper" id="upper">
          <li>
            <a class="up active">بهترین</a>
          </li>
          <li>
            <a class="up">حساب ها</a>
          </li>
          <li>
            <a class="up">تگ ها</a>
          </li>
          <li>
            <a class="up"> مکان ها</a>
          </li>
        </div>
      </div>

    </div>

    <div class="container-fluid">
      <div id="nav4">
        <nav class="navbar navbar-expand-lg">
          <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button"
                  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>
          <a class="navbar-brand" href="#" style="color:black;">
            <!-- <img src="/images/logo.jpeg" class="logo-img" alt=""> -->لوگو
          </a>
          <input class="form-control" type="search" placeholder="جستجو" aria-label="search" dir="rtl">

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" dir="rtl">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style="color:black;">کاوش</a>
              </li>
            </ul>

            <template v-if="!$auth.loggedIn">
              <NuxtLink to="/login">
                <div class="wallet">
                  <button class="btn btn-outline-success raise"
                          style="color: white;background-color: black;" type="submit" data-bs-toggle="modal"
                          data-bs-target="#exampleModal"> ثبت نام
                  </button>

                </div>
              </NuxtLink>
            </template>
            <template v-if="$auth.loggedIn">
              <div class="wallet">
                <button class="btn btn-outline-success raise"
                        @click.prevent="logout"
                        style="color: white;background-color: black;" type="submit" data-bs-toggle="modal"
                        data-bs-target="#exampleModal"> خروج
                </button>

              </div>
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" @click.prevent="logout" href="#">Logout</a>-->
<!--              </li>-->
            </template>
          </div>


        </nav>

      </div>
    </div>


  </div>

</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.replace({name: 'index'})
    }
  }
}
</script>

<style>
.logo-img {
  width: 80px;
}
</style>
