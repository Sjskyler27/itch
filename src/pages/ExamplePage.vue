<template>
  <div>
    <BaseButton @click="startAsyncFunction">startAsyncFunction</BaseButton>
    <BaseButton ref="resume" class="flat">resumeAsyncFunction</BaseButton>
    <p>{{ output }}</p>
  </div>
  <!-- <div class="faq-container">
    <FaqCard class="faq">
      <template v-slot:header> Headline </template>
      This is a placeholder text for sampling the content of the label I am
      making.
    </FaqCard>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      output: '',
    };
  },
  methods: {
    async startAsyncFunction() {
      this.output += 'started ';
      this.output += 'waiting ';

      promiseOut = await new Promise(this.resumeAsyncFunction);

      this.output += promiseOut;
    },
    resumeAsyncFunction(resolve, reject) {
      this.$refs.resume.addEventListener('click', () => {
        resolve();
      });
    },
  },
};
</script>
