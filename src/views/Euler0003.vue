<template>
  <div>
    <h1>Euler 3</h1>
    <label>input({{ input }}): </label>
    <input v-model="input" type="number" :min="min" />
    <br />
    <textarea :value="challenge"></textarea>
    <p>
      Update Time: {{ updateMillis }} millis (= {{ updateFPS.toFixed(2) }} FPS)
    </p>
  </div>
</template>

<script>
function now () {
  return new Date().getTime()
}

function isPrime (number, factors) {
  return !factors.some(prime => number % prime === 0)
}

function factorizeRest (primeCandidate, primes, rest, factors) {
  if (isPrime(primeCandidate, primes)) {
    while (rest % primeCandidate === 0) {
      factors.push(primeCandidate)
      rest /= primeCandidate
    }
  }
  return rest
}

export default {
  data () {
    return {
      input: 600851475143,
      min: 2,
      lastTime: undefined,
      updateMillis: 0
    }
  },
  computed: {
    challenge () {
      let factors = []
      let primes = []
      let rest = this.input

      factorizeRest(2, primes, rest, factors)

      for (let primeCandidate = 3; primeCandidate <= rest; primeCandidate += 2) {
        rest = factorizeRest(primeCandidate, primes, rest, factors)
      }

      return factors.reverse()
    },
    updateFPS () {
      return 1000 / this.updateMillis
    }
  },
  watch: {
    challenge () {
      const lastTime = this.lastTime
      this.lastTime = now()
      if (lastTime) {
        this.updateMillis = this.lastTime - lastTime
      }
    }
  },
  mounted () {
    this.lastTime = now()
  }
}
</script>
