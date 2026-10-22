<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increase() {
      this.count++
    },
    decrease() {
      this.count--
    }
  }
}
</script>

<template>
  <div>
    <h2>Counter: {{ count }}</h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>
