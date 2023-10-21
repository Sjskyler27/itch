<template>
  <div class="container">
    <!-- Tabs -->
    <div class="tab-container">
      <div
        @click="
          () => {
            setSelected('tutorial');
          }
        "
        :class="{ tab: true, selected: selected === 'tutorial' }"
      >
        Tutorial
      </div>
      <div
        @click="
          () => {
            setSelected('toolbox');
          }
        "
        :class="{ tab: true, selected: selected === 'toolbox' }"
      >
        Toolbox
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
      <div
        @click="
          () => {
            setSelected('glossary');
          }
        "
        :class="{ tab: true, selected: selected === 'glossary' }"
      >
        Glossary
      </div>
    </div>

    <!-- Info Content -->
    <div class="info-container">
      <info-page :data="tutorial" v-if="selected === 'tutorial'" />
      <info-page :data="toolbox" v-else-if="selected === 'toolbox'" />
      <info-page :data="challenges" v-else-if="selected === 'challenges'" />
      <info-page :data="glossary" v-else />
    </div>
  </div>
</template>

<script>
import InfoPage from '@/components/tutorial/InfoPage.vue';
import { challenges } from '@/assets/challenges.js';
import { toolbox } from '@/assets/toolbox.js';
import { tutorial } from '@/assets/tutorial.js';
import { glossary } from '@/assets/glossary.js';

export default {
  components: { InfoPage },
  data() {
    return {
      selected: 'tutorial',
      challenges: challenges,
      toolbox: toolbox,
      tutorial: tutorial,
      glossary: glossary,
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
  resize: none; /* Allow resizing both horizontally and vertically */
  //   width: 30vw;
  //   height: 80vw;
  min-width: 280px; /* Set the minimum width */
  min-height: 580px;
}

.tab-container {
  display: flex;
  :not(:last-child) {
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
