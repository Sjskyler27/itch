<template>
  <div class="container"></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.container {
  border: 2px solid $accent1;
  border-radius: 8px;
  overflow: auto;
  resize: both; /* Allow resizing both horizontally and vertically */
  //   width: 30vw;
  //   height: 80vw;
  min-width: 280px; /* Set the minimum width */
  min-height: 580px;
  padding: 10px;
}
</style>
