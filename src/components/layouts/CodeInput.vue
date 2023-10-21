<template>
  <div class="container">
    <input type="text" v-model="codeText" />
    <button
      class="run-button"
      @click="runClicked"
      :class="{ 'is-running': $store.state.isRunning }"
    >
      {{ $store.state.isRunning ? 'stop' : 'run' }}
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
      codeText: 'age is ask how old are you \nwrite you are |age| years old',
    };
  },
  methods: {
    runClicked() {
      if (this.$store.state.isRunning) {
        this.$store.commit('setFalse');
      } else {
        this.$store.commit('setTrue');
        this.$emit('run', this.codeText);
      }
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
  background-color: $secondary-color; // Default to the "stop" color
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &.is-running {
    // When the code is running
    background-color: $primary-color;
  }

  .icon-run,
  .icon-stop {
    display: none; // Default hide both icons
  }

  &.is-running .icon-run {
    display: block; // Show flag icon when running
  }

  &:not(.is-running) .icon-stop {
    display: block; // Show pause icon when not running
  }
}
</style>
