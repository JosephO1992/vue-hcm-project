<template>
  <div class="home">
    <h2>Home Page</h2>
    <p>
      Total staff members: {{countStaff}}
    </p>
    <p>
      Total salary spend: ${{countSalary}}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    countStaff() {
      return this.$store.getters.countStaff
    },
    countSalary() {
      return this.$store.getters.countSalary
    }
  }
}
</script>

