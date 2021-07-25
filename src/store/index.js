import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    staff: [
      {
        id: 1,
        firstName: "Joe",
        lastName: "O'Reilly",
        salary: 25000
      },
      {
        id: 2,
        firstName: "Chloe",
        lastName: "Stanley",
        salary: 30000
      },
      {
        id: 2,
        firstName: "James",
        lastName: "Hutchinson",
        salary: 27000
      }
    ]
  },
  getters: {
    countStaff: (state) => { 
      return state.staff.length
    },
    getUniqueStaff: (state) => (id) => {
      return state.staff.find(staff => staff.id === id)
    },
    countSalary: (state) => {
      let arr1 = [];
      for(let i = 0; i < state.staff.length; i++) {
        arr1.push(state.staff[i].salary);
      }
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return arr1.reduce(reducer);
    }
  },
  mutations: {
 
  },
  actions: {
  },
  modules: {
  }
})
