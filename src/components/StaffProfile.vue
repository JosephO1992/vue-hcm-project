<template>
    <div>
        This will be the page for staff with an ID of {{id}} and with the name of {{firstName}} {{lastName}}.
    </div>
</template>
<script>
export default {
    props: ['id', 'firstName', 'lastName'],
    name: 'StaffProfile'
}
</script>