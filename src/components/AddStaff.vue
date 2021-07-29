<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h2>Add Staff</h2>
            <div><button class="btn btn-primary" @click="showForm">+</button></div>
        </div>
        <form v-if="staffFormShowing" @submit.prevent="onAddStaff">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" aria-describedby="firstName" v-model="firstName" placeholder="Enter first name">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Enter last name" v-model="lastName">
            </div>
            <div class="form-group">
                <label class="form-check-label" for="salary">Salary</label>
                <input type="number" class="form-control" id="salary" placeholder="Enter salary" v-model="salary">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

</template>

<script>
export default {
    data() {
        return {
            staffFormShowing: false,
            staffToAdd: {
                firstName,
                lastName,
                salary
            }
        }
    },
    methods: {
        showForm () {
            this.staffFormShowing = !this.staffFormShowing;
        },
        onAddStaff(){
            console.log(
                firstName,
                lastName,
                salary
            )
        }

    }
}
</script>