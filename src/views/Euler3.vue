<template>
  <problem
    :input="input"
    :min="2"
    :challenge="challenge"
    @input="value => (input = value)"
  />
</template>

<script>
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

function factorize (number) {
  let factors = []
  let primes = []
  let rest = number
  factorizeRest(2, primes, rest, factors)
  for (let primeCandidate = 3; primeCandidate <= rest; primeCandidate += 2) {
    rest = factorizeRest(primeCandidate, primes, rest, factors)
  }
  return factors
}

export default {
  data () {
    return {
      input: 600851475143
    }
  },
  computed: {
    challenge () {
      const factors = factorize(this.input)

      return factors.reverse()
    }
  }
}

</script>
