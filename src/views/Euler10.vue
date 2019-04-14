<template>
  <problem
    :input="input"
    :min="3"
    :challenge="challenge"
    @input="value => (input = value)"
  />
</template>

<script>
function isPrime (number, primes) {
  return !primes.some(prime => number % prime === 0)
}

export default {
  data () {
    return {
      input: 10
    }
  },
  computed: {
    challenge () {
      const primes = [2]
      for (let number = 3; number < this.input; number += 2) {
        if (isPrime(number, primes)) {
          primes.push(number)
        }
      }

      return primes.reduce((a, b) => a + b)
    }
  }
}
</script>
