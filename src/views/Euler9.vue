<template>
  <problem
    :input="input"
    :challenge="challenge"
    @input="value => (input = value)"
  />
</template>

<script>
export default {
  data () {
    return {
      input: 25
    }
  },
  computed: {
    challenge () {
      const sum = this.input
      for (let a = 1; a < sum / 3; a += 1) {
        for (let b = a; b < sum - 2 * a; b += 1) {
          const c = sum - a - b

          if (c <= 0) {
            console.log('I doofed up')
            continue
          }

          if (a * a + b * b === c * c) {
            return a * b * c
          }
        }
      }
      return 'nothing found'
    }
  }
}
</script>
