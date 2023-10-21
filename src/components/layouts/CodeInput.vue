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
      <i v-if="!$store.state.isRunning" class="fa-solid fa-flag"></i>
      <i v-else class="fa-solid fa-square"></i>
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
@import '@fortawesome/fontawesome-free/css/all.css';

/* Define a class for the flag icon when running */

.container {
  border: 2px solid $secondary-color;
  border-radius: 8px;

  overflow: auto;
  resize: none; /* Allow resizing both horizontally and vertically */
  min-width: 280px; /* Set the minimum width */
  min-height: 580px;
}

.custom-text-area {
  width: fill;
  padding: 10px;
  height: 99%;
  resize: none;
  outline: none;
  border: none;
  tab-size: 3;
  font-family: 'JetBrains Mono', monospace;
  font-size: 17px; /* Adjust the font size as needed */
}

.input-field {
  border: 2px solid $secondary-color;
  border-radius: 8px;
  outline: none;
  padding: 10px;
  resize: none; /* Allow resizing both horizontally and vertically */
  min-width: 280px; /* Set the minimum width */
}

.run-button {
  margin-top: -60px;
  margin-right: 20px;
  position: relative;
  background-color: $secondary-color;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Font Awesome'; // Use the Font Awesome font family
  font-size: 18px; // Adjust the font size as needed
  padding: 10px;
  float: right;
}
.run-button.is-running {
  background-color: $primary-color; /* Change this color to the desired color when running */
  /* You can also change other styles like text color or border color here */
}
</style>
