<template>
  <div>
    <div>
      <router-link v-if="previousProblem" :to="`/${previousProblem}`"
        >previous</router-link
      >
    </div>
    <div>
      <router-link v-if="nextProblem" :to="`/${nextProblem}`">next</router-link>
    </div>
    <h1>
      <a :href="`https://projecteuler.net/problem=${num}`" target="_blank"
        >Euler {{ num }}</a
      >
    </h1>

    <label>input: </label>
    <input
      v-if="input !== undefined"
      v-model="myInput"
      type="number"
      :min="min"
    />
    <br />
    <textarea rows="10" cols="80" :value="JSON.stringify(challenge)"></textarea>
    <p>
      Update Time: {{ updateMillis }} millis (= {{ updateFPS.toFixed(2) }} FPS)
    </p>
  </div>
</template>

<script>
function now () {
  return new Date().getTime()
}

export default {
  props: {
    min: { type: Number, default: 1 },
    input: { type: Number, default: undefined },
    challenge: [String, Number, Array, Object]
  },
  data () {
    return {
      updateMillis: 0,
      myInput: this.input
    }
  },
  computed: {
    num () {
      return Number(this.$route.path.replace(/\D/g, ''))
    },
    updateFPS () {
      return 1000 / this.updateMillis
    },
    nextProblem () {
      return this.num + 1
    },
    previousProblem () {
      return this.num - 1
    }
  },
  watch: {
    myInput () {
      const value = Number(this.myInput)
      if (value !== this.input) {
        this.$emit('input', value)
      }
    },
    input () {
      if (this.myInput !== this.input) { this.myInput = this.input }
    },
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
