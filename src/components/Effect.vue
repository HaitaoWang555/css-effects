<template>
  <div ref="box" class="effect" @click="inspect">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  methods: {
    inspect(e) {
      const self = this.$refs.box === e.target

      // don't accept clicks on an input
      if (this.type === 'input' && !self) return

      this.$emit('inspect')
    },
  },
}
</script>

<style lang="scss" scoped>
.effect {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;

  &:hover {
    background-color: hsla(237, 37%, 24%, 0.5);
    cursor: pointer;
  }
}
</style>
