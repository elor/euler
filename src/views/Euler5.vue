<template>
  <problem
    :input="input"
    :min="2"
    :challenge="challenge"
    @input="value => (input = value)"
  />
</template>

<script>
import { range, countBy, mergeWith } from 'lodash'

function factors (num) {
  let primes = []
  let remainder = num
  for (let i = 2; i <= remainder; i++) {
    while (remainder % i === 0) {
      primes.push(i)
      remainder /= i
    }
  }

  return countBy(primes)
}

export default {
  data () {
    return {
      input: 10
    }
  },
  computed: {
    challenge () {
      const allPrimes = range(2, Number(this.input) + 1).map(factors)

      const primeFrequencies = mergeWith(...allPrimes, (a = 0, b = 0) => Math.max(a, b))

      return Object.entries(primeFrequencies).map(([b, e]) => Number(b) ** e).reduce((a, b) => a * b)
    }
  }
}
</script>
