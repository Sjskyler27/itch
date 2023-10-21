<template>
  <div>
    <BaseButton>Click me</BaseButton>
    <BaseButton class="flat">Click me</BaseButton>
  </div>
  <div class="faq-container">
    <FaqCard class="faq">
      <template v-slot:header> Headline </template>
      This is a placeholder text for sampling the content of the label I am
      making.
    </FaqCard>
  </div>
</template>
