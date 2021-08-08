<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h2>Add Staff</h2>
            <div><button class="btn btn-primary" @click="showForm">{{!staffFormShowing ? '+' : '-'}}</button></div>
        </div>
        <form @submit.prevent="onAddStaff" v-if="staffFormShowing" >
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input v-model="firstName" type="text" class="form-control" id="firstName" aria-describedby="firstName"  placeholder="Enter first name">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input v-model="surName" type="text" class="form-control" id="lastName" placeholder="Enter last name" >
            </div>
            <div class="form-group">
                <label class="form-check-label" for="salary">Salary</label>
                <input v-model="salary" type="number" class="form-control" id="salary" placeholder="Enter salary" number>
            </div>
            <button type="submit"  class="btn btn-primary">Submit</button>
        </form>
    </div>

</template>

<script>
export default {
    data() {
        return {
            staffFormShowing: false,
            firstName: '',
            surName: '',
            salary: ''
        }
    },
    methods: {
        showForm () {
            this.staffFormShowing = !this.staffFormShowing;
        },
        onAddStaff(){
            console.log(this.firstName, this.surName, this.salary)
        }
     

    }
}
</script>