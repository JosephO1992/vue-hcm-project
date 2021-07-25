<template>
    <div>
     <h2>Staff Page</h2>
        <ul class="list-group">
            <staff-item v-for="staff in allStaff" :key="staff.id" :staff="staff"></staff-item>         
        </ul>
    </div>
</template>

<script>

import StaffItem from '../components/StaffItem.vue';

export default {
    components: {
        StaffItem
    },
    computed: {
        allStaff () {
            return this.$store.state.staff;
        }
       
       
    }
  
  
}
</script>