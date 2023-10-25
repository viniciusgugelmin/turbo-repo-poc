<template>
  <div>
    <button>
      <slot></slot>
    </button>
    Counter: {{ counter }}
  </div>
</template>

<script>
console.log('ButtonCounter')
export default {
  name: "ButtonCounter",
  props: {
    counter: {
      type: Number,
      default: 0
    }
  },

  mounted() {
    console.log('ButtonCounter mounted')
  }
}
</script>