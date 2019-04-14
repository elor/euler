<template>
  <problem
    :input="input"
    :min="1"
    :challenge="challenge"
    @input="value => (input = value)"
  />
</template>

<script>
import { range } from 'lodash'

function collatzLength (n) {
  let i
  for (i = 0; n > 1; i++) {
    if (n % 2) {
      n = 3 * n + 1
    } else {
      n /= 2
    }
  }

  return i
}

export default {
  data () {
    return {
      input: 13
    }
  },
  computed: {
    challenge () {
      let longest = 0
      let longestLength = 0

      range(this.input, 1).forEach(n => {
        const length = collatzLength(n)
        if (length > longestLength) {
          longestLength = length
          longest = n
        }
      })

      return { longest, longestLength }
    }
  }
}
</script>
