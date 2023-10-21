<template>
  <!-- <TheHeader title="SS"></TheHeader> -->
  <div class="page">
    <TopHeader />
    <router-view></router-view>
    <!-- <div class="flex"> -->
    <p class="footer">Programming For Young Learners</p>
    <!-- </div> -->
  </div>
</template>
<style lang="scss">
@import '@/assets/main.scss';

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}
.page {
  // height: 99vh;
  display: grid;
  grid-template-rows: auto 60vh 50px;
}
html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Bebas Neue', sans-serif;
  }
}

.flex {
  display: flex;
}

.footer {
  margin: 0px 27px 0 0;
  // margin-left: auto;
  // margin-bottom: 15px;
  color: $secondary-color;
  text-align: right;
}

.faq {
  margin-top: 0px;
}
</style>
