<template>
  <problem
    :input="input"
    :min="0"
    :challenge="challenge"
    @input="value => (input = value)"
  />
</template>

<script>
import { sortBy, sortedUniqBy } from 'lodash'

function isPalindrome (number) {
  const string = number.toString()
  return string === string.split('').reverse().join('')
}

export default {
  data () {
    return {
      input: 999
    }
  },
  computed: {
    challenge () {
      const start = { high: this.input, low: this.input, product: 999 * 999 }
      let stack = [start]
      let largest = { product: 0 }

      while (stack.length) {
        const pair = stack.pop()
        if (isPalindrome(pair.product)) {
          largest = pair
        }

        if (pair.high > pair.low) {
          const low = pair.low
          const high = pair.high - 1
          const newPair = { high, low, product: high * low }
          if (newPair.product > largest.product) {
            stack.push(newPair)
          }
        }
        if (pair.low > 0) {
          const low = pair.low - 1
          const high = pair.high
          const newPair = { high, low, product: high * low }
          if (newPair.product > largest.product) {
            stack.push(newPair)
          }
        }

        stack = sortedUniqBy(sortBy(stack, ['product']), pair => pair.product)
      }

      return largest
    }
  }
}
</script>
