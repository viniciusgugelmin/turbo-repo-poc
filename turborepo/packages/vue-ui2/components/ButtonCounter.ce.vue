<template>
  <div>
    <button>
      <slot></slot>
    </button>
    Counter: {{ counter }}
  </div>
</template>

<script>
export default {
  name: "ButtonCounter",
  props: {
    counter: {
      type: Number,
      default: 0
    },
  },

  mounted() {
    console.log('ButtonCounter mounted')
  }
}
</script>