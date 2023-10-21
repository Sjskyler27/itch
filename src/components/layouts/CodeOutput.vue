<template>
  <div class="field">
    <div v-for="(message, index) in terminalMessages" :key="index">
      <div>
        {{ message }}
      </div>
    </div>
    <template v-if="addInput">
      <input class="input" ref="inputField" @keydown.enter="handleInput" />
    </template>
    <!-- Button to test the code interpreter -->
    <button
      @click="
        testInterpreterResponse([
          { type: 'print', text: 'helloWorld' },
          { type: 'print', text: 'we are here' },
          { type: 'input', text: 'what is your name:' },
        ])
      "
    >
      test
    </button>
    <!-- Button to test the code interpreter with custom code input -->
    <button
      @click="
        testInterpreter(
          'age is ask how old are you \nwrite you are |age| years old'
        )
      "
    >
      Test custom code
    </button>
  </div>
</template>

<script>
// import CodeInterpreter from '@/assets/codeInterpreter';
import Interpreter from '@/helpers/helper.js';

export default {
  name: 'CodeOutput',
  emits: ['changeIsRunning'],
  props: {
    usersCode: {
      type: String,
      default: '',
    },
    codeKey: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      terminalMessages: [], // Array to store print and input messages
      addInput: false,
      interpreter: null,
    };
  },
  methods: {
    parseUserCode() {
      this.interpreter = new Interpreter(this.usersCode);
      const interpreterResponse = this.interpreter.main();
      this.handleInterpreterResponse(interpreterResponse);
    },
    // Function to handle input events
    handleInput(event) {
      if (event.key === 'Enter') {
        const userInput = event.target.value;
        //add user input to message stack to keep it there and no longer be editable
        this.terminalMessages.push(userInput);
        // remove input field
        this.addInput = false;
        //send input to interpereter
        const interpreterResponse = this.interpreter.main(userInput);
        //send interpereter response to the handler
        this.handleInterpreterResponse(interpreterResponse);
      }
    },
    handleInterpreterResponse(response) {
      // Process the interpreter's response here (e.g., extract type and text)
      console.log(response);

      response.data.forEach(item => {
        // Add the message to the terminalMessages array as a string
        this.terminalMessages.push(item);
        console.log('terminalMessages');
        console.log(this.terminalMessages);
      });

      // Check if it's the end of code
      if (!response.endOfCode) {
        // Add an input message and input field
        this.addInput = true;
      } else {
        // code is no longer running!
        this.$store.commit('setFalse');
      }
    },
    testInterpreter(code) {
      // Test the interpreter with custom code input
      this.interpreter = new Interpreter(code);
      const response = this.interpreter.main();
      this.handleInterpreterResponse(response);
    },
    testInterpreterResponse(response) {
      // Simulate a user entering input and getting a response
      this.handleInterpreterResponse(response);
    },
  },

  // Watch for changes in the 'code' prop and add messages accordingly
  watch: {
    codeKey(value) {
      this.parseUserCode();
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.field {
  border: 2px solid $primary-color;
  border-radius: 8px;
  padding: 10px;
  font-family: monospace;
  background-color: #fff;
  overflow: auto;
  resize: both; /* Allow resizing both horizontally and vertically */
  min-width: 280px; /* Set the minimum width */
  min-height: 580px;
  // width: 30vw;
  // height: 80vw;
}
</style>