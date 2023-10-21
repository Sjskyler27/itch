<template>
  <div>
    <key-card
      v-for="keyInfo in keys"
      :key="keyInfo.defintion"
      :keyInfo="keyInfo"
    />
  </div>
</template>

<script>
import keys from '@/assets/definitions.js';
import KeyCard from './KeyCard.vue';

export default {
  components: { KeyCard },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss"></style>
