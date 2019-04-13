<template>
  <div>
    <h1>Euler 1</h1>
    <textarea :value="challenge" height="100"></textarea>
  </div>
</template>

<script>
const FIBO_LIMIT = 4000000

function fibosum (a = 0, b = 1) {
  const sum = a + b
  if (sum > FIBO_LIMIT) {
    return 0
  }
  const isEven = sum % 2 === 0
  return fibosum(b, sum) + (isEven ? sum : 0)
}

export default {
  props: {
    msg: String
  },
  computed: {
    challenge () {
      return fibosum()
    }
  }
}
</script>
