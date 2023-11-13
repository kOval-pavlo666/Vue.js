import { createStore } from 'vuex'

function checkDish(dish, filter){
  for (const key in filter) {
    if (filter[key] && filter[key] !== dish[key]) return false;
  }
  return true;
}

export default createStore({
  state: {
    dishesList:[
    {
      name: "Борщ",
      unit: "г",
      costPerUnit: 10,
      cuisine: "Українська"
    },
    {
      name: "Паста карбонара",
      unit: "г",
      costPerUnit: 15,
      cuisine: "Італійська"
    },
    {
      name: "Суші",
      unit: "шт",
      costPerUnit: 20,
      cuisine: "Японська"
    },
  ],
  filterObj: {},
  },
  getters: {
    dishes: ({dishesList, filterObj})=>dishesList.filter((dish)=>checkDish(dish, filterObj)),
    getDishByName: (state)=>{
      return (dishName)=>state.dishesList.find((dish) => dish.name == dishName);
    }
  },
  mutations: {
    addDish(state, dish) {
      state.dishesList.push(dish);
    },
    updateFilter(state, filter) {
      state.filterObj = filter;
    },
    removeDishByName(state, dishName) {
      state.dishesList = state.dishesList.filter(
        (dish) => dish.name !== dishName
      );
    },
  },
  actions: {
    onAddDish({ commit }, dishObj) {
      commit("addDish", {
        ...dishObj,
      });
    },
    onUpdateFilter({ commit }, filter) {
      commit("updateFilter", filter);
    },
    onDeleteDish({ commit }, dishName) {
      commit("removeDishByName", dishName);
    },
  },
  modules: {
  }
})
