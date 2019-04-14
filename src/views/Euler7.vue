<template>
  <problem
    :input="input"
    :challenge="challenge"
    @input="value => (input = value)"
  />
</template>

<script>
function isPrime (number, factors) {
  return !factors.some(prime => number % prime === 0)
}

export default {
  data () {
    return {
      input: 6
    }
  },
  computed: {
    challenge () {
      const factors = [2]
      for (let number = 3; factors.length < this.input; number += 2) {
        if (isPrime(number, factors)) {
          factors.push(number)
        }
      }

      return factors.pop()
    }
  }
}
</script>
