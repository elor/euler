<template>
  <problem
    :input="input"
    :challenge="challenge"
    @input="value => (input = value)"
  />
</template>

<script>
export default {
  data () {
    return {
      input: 4000000
    }
  },
  computed: {
    challenge () {
      return this.fibosum()
    }
  },
  methods: {
    fibosum (a = 0, b = 1) {
      const sum = a + b
      if (sum > this.input) {
        return 0
      }
      const isEven = sum % 2 === 0
      return this.fibosum(b, sum) + (isEven ? sum : 0)
    }
  }
}
</script>
