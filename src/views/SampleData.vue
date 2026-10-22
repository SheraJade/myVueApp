
<script>
export default {
  data() {
    return {
      name: "Juan",
      age: 20,
      studentId: "2026-001",
      course: "BSIT",
      yearLevel: "3rd Year"
    }
  }
}
</script>

<template>
  <div>
    <h2>Student Profile</h2>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Student ID: {{ studentId }}</p>
    <p>Course: {{ course }}</p>
    <p>Year Level: {{ yearLevel }}</p>
  </div>
</template>
