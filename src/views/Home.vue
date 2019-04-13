<template>
  <div>
    <div v-for="route in problems" :key="route.name">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </div>
  </div>
</template>

<script>
import problems from '@/problems'
export default {
  data () {
    return {
      problems
    }
  }
}
</script>
