<template>
  <div>
    <info-card v-for="info in data" :key="info.description" :info="info" />
  </div>
</template>

<script>
import InfoCard from './InfoCard.vue';

export default {
  components: { InfoCard },
  props: {
    data: {
      type: Object,
    },
  },
  mounted() {
    console.log(this.data);
  },
};
</script>

<style lang="scss"></style>
