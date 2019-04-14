<template>
  <problem
    :input="input"
    :min="2"
    :challenge="challenge"
    @input="value => (input = value)"
  />
</template>

<script>
import { range, uniq } from 'lodash'

function factorize (rest) {
  let factors = []
  while (rest % 2 === 0) {
    factors.push(2)
    rest /= 2
  }

  for (let candidate = 3; candidate <= rest; candidate += 2) {
    if (rest % candidate === 0 && factors.every(factor => candidate % factor)) {
      while (rest % candidate === 0) {
        factors.push(candidate)
        rest /= candidate
      }
    }
  }
  return factors
}

function combinations (selection) {
  if (selection.length <= 1) {
    return [[], selection]
  }
  const rest = combinations(selection.slice(1))
  const front = selection[0]

  return [
    ...rest,
    ...rest.map(r => [front].concat(r))
  ]
}

function divisors (number) {
  // return [1].concat(range(2, number / 2 + 1).filter(divisor => number % divisor === 0)).concat([number])

  return uniq(combinations(factorize(number)).filter(arr => arr.length).map(combination => combination.reduce((a, b) => a * b)).concat(1))
}

function * triangle (start = 1) {
  let num = range(1, start).reduce((a, b) => a + b, 0)
  for (let i = start; ; i++) {
    yield num += i
  }
}

export default {
  data () {
    return {
      input: 28
    }
  },
  computed: {
    challenge () {
      const start = 1
      const limit = this.input

      for (let triangleNumber of triangle(start)) {
        const divs = divisors(triangleNumber)
        console.log(`${triangleNumber}: ${divs.length}`)
        if (divs.length > limit) { return { length: divs.length, triangleNumber, divs } }
      }
      return undefined
    }
  }
}
</script>
