<template>
  <div class="container">
    <textarea
      class="custom-text-area"
      type="text"
      v-model="codeText"
      @keydown.tab.prevent="insertTab"
      wrap="off"
    />
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
// import CustomInput from '../UI/CustomInput.vue';
export default {
  props: {
    // isRunning: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  emits: ['run'],
  data() {
    return {
      //codeText: 'age is ask how old are you \nwrite you are |age| years old',
      //codeText: 'if 10 > 5\n\twrite woohoo',
      codeText: 'repeat 5\n\twrite hi',
      //codeText: 'x is ask what is x?\ny is ask what is y?\nif x > y\n\twrite x is greater than y\nif x = y\n\twrite x and y are the same\nif y > x\n\twrite y is greater than x\n\twrite and thus is more awesome\nwrite done',
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
    insertTab(event) {
      if (event.key === 'Tab') {
        event.preventDefault(); // Prevent the default Tab behavior (focus change)
        const inputElement = event.target;
        const startPos = inputElement.selectionStart;
        const endPos = inputElement.selectionEnd;

        // Insert a Tab character at the current cursor position
        const newValue =
          this.codeText.substring(0, startPos) +
          '\t' + // Tab character
          this.codeText.substring(endPos);

        this.codeText = newValue;

        // Move the cursor position to after the inserted Tab character
        inputElement.selectionStart = startPos + 1;
        inputElement.selectionEnd = startPos + 1;
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
.custom-text-area {
  min-width: fill; /* Set the minimum width */
  min-height: 580px;
  width: fill;
  resize: none;
  border: none;
  outline: none;
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
