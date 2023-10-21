<template>
  <div>
    <div @click="toggleExpand" class="title-flex">
      <div class="title">
        {{ title }}
      </div>
      <div :class="{ chevron: true, expanded: expanded }">></div>
    </div>
    <div v-if="expanded" class="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      expanded: false,
    };
  },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.chevron {
  font-family: monospace;
  transition: rotate 0.1s ease-out;
  font-size: 20px;
  width: min-content;
  &.expanded {
    rotate: 90deg;
  }
}

.title-flex {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 7px;
  cursor: pointer;
}

.description {
  margin-bottom: 7px;
  margin-left: 10px;
  border-left: 2px solid $secondary-color;
  padding-left: 10px;
}

.title {
  border-bottom: 2px solid $secondary-color;
}
</style>
