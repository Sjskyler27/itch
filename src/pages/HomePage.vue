<template>
  <div class="home-flex">
    <info-box></info-box>
    <code-input
      :is-running="isRunning"
      @run="
        codeText => {
          runCode(codeText);
        }
      "
    >
    </code-input>
    <code-output :users-code="codeText" :code-key="codeKey" />
  </div>
</template>

<script>
import CodeInput from '@/components/layouts/CodeInput.vue';
import CodeOutput from '@/components/layouts/CodeOutput.vue';
import InfoBox from '@/components/layouts/InfoBox.vue';

export default {
  data() {
    return {
      output: 'print: Hello\ninput: What is your name?',
      codeText: '',
      codeKey: '',
      isRunning: false,
    };
  },
  components: {
    CodeInput,
    CodeOutput,
    InfoBox,
  },
  methods: {
    runCode(codeText) {
      this.codeText = codeText;
      this.codeKey = Date.now().toString(); //generate key
    },
  },
};
</script>

<style scoped lang="scss">
.home-flex {
  $padding: 27px;

  padding: 0 $padding $padding $padding;
  width: 100%;
  // box-sizing: border-box;
  // height: calc(100% - $padding);
  display: flex;
  > * {
    width: 100%;
  }
  // grid-template-columns: 1fr 1.25fr 1fr;
  gap: $padding;
}
</style>
