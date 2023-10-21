<template>
  <div class="">
    <input type="text" @keydown.tab.prevent="insertTab" />
  </div>
</template>

<script>
export default {
  //   props: {
  //     userText: '',
  //   },
  data() {
    return {};
  },
  methods: {
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
  // Rest of your component
};
</script>
