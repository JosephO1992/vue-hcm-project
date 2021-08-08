<template>
    <div>
        This will be the page for staff with an ID of {{id}}
    </div>
</template>
<script>
export default {
    props: ['id'],
    name: 'StaffProfile'
}
</script>