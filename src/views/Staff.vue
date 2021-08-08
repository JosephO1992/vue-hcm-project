<template>
    <div class="">
     <h2>Staff Page</h2>
        <ul class="list-group text-dark" >
            <staff-item :staff="staff" v-for="staff in allStaff" :key="staff.id">
            </staff-item>         
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