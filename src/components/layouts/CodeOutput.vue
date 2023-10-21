<template>
  <div
    class="field"
    :class="{ 'is-running': $store.state.isRunning, error: hasError }"
  >
    <div v-for="(message, index) in terminalMessages" :key="index">
      <div
        :class="{
          message: true,
          'last-message': index === terminalMessages.length - 1 && hasError,
        }"
      >
        {{ message }}
      </div>
    </div>
    <input
      v-if="addInput"
      ref="inputField"
      @keydown.enter="handleInput"
      v-model="userInput"
    />
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
      userInput: '',
      hasError: false,
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
        this.userInput = event.target.value;
        //add user input to message stack to keep it there and no longer be editable
        this.terminalMessages.push(this.userInput);
        // remove input field
        this.addInput = false;
        //send input to interpereter
        const interpreterResponse = this.interpreter.main(this.userInput);
        //reset user input
        this.userInput = '';
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
      if (!response.endOfCode && !response.hasError) {
        // Add an input message and input field
        this.addInput = true;
      } else {
        // code is no longer running!
        this.addInput = false;
        this.$store.commit('setFalse');
      }
      // check for an error
      if (response.error) {
        console.log('error');
        this.hasError = true; // Set the hasError property to true
        this.addInput = false;
        this.$store.commit('setFalse');
      } else {
        this.hasError = false; // Reset the hasError property if there is no error
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
    // Watch for changes in the 'isRunning' state
    '$store.state.isRunning'(newValue) {
      // If 'isRunning' becomes false, set 'addInput' to false
      if (!newValue) {
        this.addInput = false;
      }
    },
    codeKey(value) {
      this.terminalMessages = [];
      this.parseUserCode();
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.field {
  border: 2px solid $accent1;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  overflow: auto;
  resize: non; /* Allow resizing both horizontally and vertically */
  min-width: 280px; /* Set the minimum width */
  min-height: 580px;

  // width: 30vw;
  // height: 80vw;
}
.message {
  font-family: 'JetBrains Mono', monospace;
}
input {
  font-family: 'JetBrains Mono', monospace;
  font-size: 15px;
}
.field.is-running {
  border: 2px solid $secondary-color;
  transition: border 0.3s ease;
}
.field.error {
  border: 2px solid $primary-color;
  transition: border 0.3s ease;
}
.last-message {
  color: red;
}
/* Vertical Track */
::-webkit-scrollbar {
  width: 8px; /* Set the width of the vertical scrollbar */
  background-color: #f5f5f5; /* Background color of the vertical track */
}

/* Vertical Handle */
::-webkit-scrollbar-thumb {
  background-color: #888; /* Color of the vertical scrollbar handle */
  border-radius: 4px; /* Rounded corners for the vertical handle */
}

/* Vertical Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Color of the vertical handle on hover */
}

/* Horizontal Track */
::-webkit-scrollbar-horizontal {
  height: 4px; /* Set the height of the horizontal scrollbar */
  background-color: #f5f5f5; /* Background color of the horizontal track */
}

/* Horizontal Handle */
::-webkit-scrollbar-horizontal-thumb {
  background-color: #888; /* Color of the horizontal scrollbar handle */
  border-radius: 4px; /* Rounded corners for the horizontal handle */
}

/* Horizontal Handle on hover */
::-webkit-scrollbar-horizontal-thumb:hover {
  background-color: #555; /* Color of the horizontal handle on hover */
}
</style>
