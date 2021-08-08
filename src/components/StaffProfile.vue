<template>
    <div class="container">
        <div class="row">
            <div class="d-flex justift-content-start align-items-center">
                <img src="../assets/avatar2.png" class="avatar-image">
                <h2>{{staff.firstName}} {{staff.lastName}}</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        staff: Object
    },
    name: 'StaffProfile'
}
</script>
<style scoped>
.avatar-image {
    height: 4rem;
    width: 4rem;
    border-radius: 2rem;
}
</style>