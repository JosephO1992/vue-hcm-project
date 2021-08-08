<template>
	<li class="list-group-item container">
		<div class="row">
			<router-link
				:to="{
					name: 'StaffDetails',
					params: {
						id: staff.id,
					},
				}"
			>
				<h3 v-if="!editing" class="col-6 ">
					{{ staff.firstName }} {{ staff.lastName }}
				</h3>
			</router-link>
			<input
				v-if="editing"
				v-model="staff.firstName"
				type="text"
				class="col-3 mx-2 px-3"
			/>
			<input
				v-if="editing"
				v-model="staff.lastName"
				type="text"
				class="col-3 mx-2 px-3"
			/>
			<button class="btn btn-info col-2 mx-2" @click="showInfo">
				{{ moreInfo ? "Less" : "More" }} Info
			</button>
			<button class="btn btn-info col-2 mx-2" @click="editMode">
				{{ editing ? "Save" : "Edit" }}
			</button>
		</div>
		<div v-if="moreInfo" class="row">
			<h5 class="col-3" v-if="!editing">Salary: ${{ staff.salary }}</h5>
			<input
				class="col-3 px-3 m-2"
				v-else
				v-model="staff.salary"
				type="number"
			/>
		</div>
	</li>
</template>

<script>
	export default {
		name: "StaffItem",
		props: ["staff"],
		data: function() {
			return {
				moreInfo: false,
				editing: false,
			};
		},
		methods: {
			showInfo() {
				this.moreInfo = !this.moreInfo;
			},
			editMode() {
				this.editing = !this.editing;
			},
		},
	};
</script>
