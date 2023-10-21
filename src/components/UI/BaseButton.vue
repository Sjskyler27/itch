<template>
  <button :type="type" :class="mode"><slot> </slot></button>
</template>
<script>
export default {
  props: ['type', 'mode'],
};
</script>
<style scoped lang="scss">
@import '@/assets/main.scss';
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: $primary-color;
  border: 3px solid $primary-color;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  font-weight: 900;
}

button:hover,
button:active {
  background-color: $secondary-color;
  border-color: $secondary-color;
}

.flat {
  border-radius: 20px;
  border: 3px solid $primary-color;
  background: #fff;
  color: $primary-color;
}

.flat:hover,
.flat:active {
  border: 3px solid $secondary-color;
  color: $secondary-color;
  background-color: white;
}
</style>
