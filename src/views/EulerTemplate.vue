<template>
  <problem
    :input="input"
    :min="1"
    :challenge="challenge"
    @input="value => (input = value)"
  />
</template>

<script>
export default {
  data () {
    return {
      input: 53
    }
  },
  computed: {
    challenge () {
      return this.input
    }
  }
}
</script>
