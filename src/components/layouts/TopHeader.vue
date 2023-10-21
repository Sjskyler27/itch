<template>
  <div class="flex">
    <img src="../../../public/itchbadgepng.png" alt="Itch Logo" />
    <h1>ITCH</h1>
    <p>Programming For Young Learners</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.flex {
  display: flex;
  align-items: center;
  padding: 0 27px 0 20px;
  img {
    width: 100px;
  }
  h1 {
    $font-size: 100px;
    margin: 20px 0 20px 15px;
    font-size: $font-size;
    line-height: $font-size;
    color: $primary-color;
  }
  p {
    margin: 0;
    margin-left: auto;
    margin-bottom: 25px;
    color: $secondary-color;
    align-self: end;
  }
}
</style>
