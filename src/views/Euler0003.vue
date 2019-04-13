<template>
  <div>
    <h1>Euler 3</h1>
    <label>input({{ input }}): </label>
    <input v-model="input" type="number" min="0" />
    <br />
    <textarea :value="challenge"></textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: 600851475143
    }
  },
  computed: {
    challenge () {
      let primes = []
      let rest = this.input

      for (let currentPrime = 2; currentPrime <= rest; currentPrime += 1) {
        while (rest % currentPrime === 0) {
          primes.push(currentPrime)
          rest /= currentPrime
        }
      }

      return primes.reverse()
    }
  }
}
</script>
