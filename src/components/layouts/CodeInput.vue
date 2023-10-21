<template>
  <div class="container">
    <input type="text" v-model="codeText" />
    <!-- <textarea
      class="input-field"
      name=""
      id=""
      cols="30"
      rows="10"
      wrap="off"
      v-model="code"
    ></textarea> -->
    <button class="run-button" @click="runClicked">
      {{ isRunning ? 'stop' : 'run' }}
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    // isRunning: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  emits: ['run'],
  data() {
    return {
      codeText: '',
      isRunning: false,
    };
  },
  methods: {
    runClicked() {
      if (this.isRunning) {
        this.isRunning = false;
      } else {
        this.$emit('run', this.codeText);
      }
      // this.isRunning = !this.isRunning;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.container {
  border: 2px solid $secondary-color;
  border-radius: 8px;
  padding: 10px;
  overflow: auto;
  resize: both; /* Allow resizing both horizontally and vertically */
  min-width: 280px; /* Set the minimum width */
  min-height: 580px;
}
.input-field {
  border: 2px solid $secondary-color;
  border-radius: 8px;
  outline: none;
  padding: 10px;
  resize: both; /* Allow resizing both horizontally and vertically */
  min-width: 280px; /* Set the minimum width */
  min-height: 580px;
  //   width: 30vw;
  //   height: 80vw;
}
.run-button {
  //   position: relative; /* Position the button relative to its closest positioned ancestor (the .input-field) */
  //   top: 50%; /* Position vertically at the middle of the input field */
  //   right: 10px; /* Position 10px from the right edge of the input field */
  //   transform: translate(50%, -150%);
  //   background-color: $secondary-color;
  //   color: #fff;
  //   border: none;
  //   border-radius: 4px;
  //   padding: 5px 10px;
  //   cursor: pointer;
}
</style>
