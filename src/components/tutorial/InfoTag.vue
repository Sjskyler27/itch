<template>
  <div :class="`tag ${type}`">
    <span>
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    text: {
      type: String,
    },
    /**
     * Possible Values:
     * primary
     * secondary
     * accent
     */
    type: {
      type: String,
      default: 'accent',
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
@import '@/assets/main.scss';

.tag {
  border-radius: 20px;
  display: inline;
  font-size: 12px;
  height: min-content;
  padding: 5px;
  line-height: 12px;
  color: #fff;
  white-space: nowrap;
  &.primary {
    background-color: $primary-color;
  }
  &.secondary {
    background-color: $secondary-color;
  }
  &.accent {
    background-color: darken($accent1, 10);
  }
}
</style>
