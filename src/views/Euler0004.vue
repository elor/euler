<template>
  <div>
    <h1>Euler 4</h1>
    <label>input({{ input }}): </label>
    <input v-model="input" type="number" min="0" />
    <br />
    <textarea :value="JSON.stringify(challenge)"></textarea>
  </div>
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
      input: 9009
    }
  },
  computed: {
    challenge () {
      const start = { high: 999, low: 999, product: 999 * 999 }
      let stack = [start]
      let largest = { product: 0 }

      while (stack.length) {
        const pair = stack.pop()
        console.log(pair)
        if (isPalindrome(pair.product)) {
          largest = pair
        }

        if (pair.high > pair.low) {
          const newPair = { high: pair.high - 1, low: pair.low, product: pair.product - pair.low }
          if (newPair.product > largest.product) {
            stack.push(newPair)
          }
        }
        if (pair.low > 0) {
          const newPair = { high: pair.high, low: pair.low - 1, product: pair.product - pair.high }
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
