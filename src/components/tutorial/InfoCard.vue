<template>
  <div class="card-container">
    <div class="title-container">
      <h2 class="title">{{ info.title }}</h2>
      <info-tag
        v-if="info.badge"
        class="badge"
        type="primary"
        :text="info.badge"
      />
    </div>
    <p class="description">{{ info.description }}</p>
    <info-collapse
      v-if="info.collapse?.title"
      :title="info.collapse?.title"
      :description="info.collapse.description"
    />
    <div class="tag-container" v-if="info.tags">
      <info-tag v-for="tag in info.tags" :key="tag" :text="tag" />
    </div>
  </div>
</template>

<script>
import InfoTag from './InfoTag.vue';
import InfoCollapse from './InfoCollapse.vue';
export default {
  components: { InfoTag, InfoCollapse },
  props: {
    info: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.tag-container {
  display: flex;
  gap: 15px;
  margin-bottom: 7px;
}
.title {
  margin: 7px 0 7px 0;
}
.description {
  margin: 0 0 7px 0;
}
.title-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
.card-container {
  border-bottom: 2px solid $accent1;
  padding-bottom: 3px;
}
</style>
