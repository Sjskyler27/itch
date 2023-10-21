<template>
  <div>
    <challenge-card
      v-for="challenge in challenges"
      :key="challenge.description"
      :challengeInfo="challengeInfo"
    />
  </div>
</template>

<script>
import challenges from '@/assets/challenges.js';
import ChallengeCard from './ChallengeCard.vue';

export default {
  components: { ChallengeCard },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss"></style>
