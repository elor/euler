<template>
  <problem
    :input="input"
    :challenge="challenge"
    @input="value => (input = value)"
  />
</template>

<script>
import { range } from 'lodash'

export default {
  data () {
    return {
      input: 10
    }
  },
  computed: {
    challenge () {
      const numbers = range(1, Number(this.input) + 1)

      const squaresum = numbers.map(a => a * a).reduce((a, b) => a + b)
      const sumsquare = numbers.reduce((a, b) => a + b) ** 2

      return sumsquare - squaresum
    }
  }
}
</script>
