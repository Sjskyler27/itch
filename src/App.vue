<template>
  <!-- <TheHeader title="SS"></TheHeader> -->
  <div class="page">
    <TopHeader />
    <router-view></router-view>
    <!-- <div class="flex"> -->
    <!-- <p class="footer">Programming For Young Learners</p> -->
    <!-- </div> -->
  </div>
</template>
<style lang="scss">
@import '@/assets/main.scss';

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

code {
  font-family: 'JetBrains Mono', monospace;
}

* {
  box-sizing: border-box;
}
.page {
  // height: 99vh;
  display: grid;
  grid-template-rows: auto 70vh 50px;
  grid-template-columns: auto;
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
  color: $secondary-color;
  text-align: right;
  position: absolute;
  bottom: 0; /* Position the footer at the bottom of the viewport */
  width: 100%; /* Occupy the full width */
  padding: 10px; /* Optional padding for the footer */
}

.faq {
  margin-top: 0px;
}
</style>
