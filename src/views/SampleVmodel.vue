
<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      course: ""
    }
  }
}
</script>

<template>
  <div>
    <h2>Live Profile Form</h2>

    <label>Name:</label>
    <input v-model="name" placeholder="Enter your name">

    <br><br>

    <label>Age:</label>
    <input type="number" v-model="age" placeholder="Enter your age">

    <br><br>

    <label>Course:</label>
    <input v-model="course" placeholder="Enter your course">

    <hr>

    <h3>Your Profile</h3>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Course: {{ course }}</p>
  </div>
</template>
