<template>
  <div class="home">
    <h2>User Dashboard </h2>
    <p>
      Total staff members: {{countStaff}}
    </p>
    <p>
      Total salary spend: ${{countSalary}}
    </p>
    <p>
      {{this.$attrs.name}}
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

