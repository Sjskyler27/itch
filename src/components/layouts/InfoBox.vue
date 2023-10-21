<template>
  <div class="container">
    <!-- Tabs -->
    <div class="tab-container">
      <div
        @click="
          () => {
            setSelected('key');
          }
        "
        :class="{ tab: true, selected: selected === 'key' }"
      >
        Key
      </div>
      <div
        @click="
          () => {
            setSelected('challenges');
          }
        "
        :class="{ tab: true, selected: selected === 'challenges' }"
      >
        Challenges
      </div>
    </div>

    <!-- Info Content -->
    <div class="info-container">
      <info-page :data="definitions" v-if="selected === 'key'" />
      <info-page :data="challenges" v-else />
    </div>
  </div>
</template>

<script>
import InfoPage from '@/components/tutorial/InfoPage.vue';
import { challenges } from '@/assets/challenges.js';
import { definitions } from '@/assets/definitions.js';

export default {
  components: { InfoPage },
  data() {
    return {
      selected: 'key',
      challenges: challenges,
      definitions: definitions,
    };
  },
  methods: {
    setSelected(select) {
      this.selected = select;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.container {
  border: 2px solid $accent1;
  border-radius: 8px;
  overflow: auto;
  resize: both; /* Allow resizing both horizontally and vertically */
  //   width: 30vw;
  //   height: 80vw;
  min-width: 280px; /* Set the minimum width */
  min-height: 580px;
}

.tab-container {
  display: flex;
  :first-child {
    border-right: 2px solid $accent1;
  }
  .tab {
    padding: 10px;
    width: 50%;
    text-align: center;
    background-color: lighten($accent1, 20);
    color: darken($accent1, 30);
    border-bottom: 2px solid $accent1;
    &.selected {
      background-color: #fff;
      border-bottom: none;
      color: #000;
    }
  }
}

.info-container {
  padding: 10px;
}
</style>
