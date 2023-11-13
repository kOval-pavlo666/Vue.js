<template>
  <td>{{ dish.name }}</td>
  <td>{{ dish.unit }}</td>
  <td>{{ dish.costPerUnit }}</td>
  <td>{{ dish.cuisine }}</td>
  <td><button @click="onDeleteDish(dish.name)">Delete</button></td>
</template>
  
  <script>
  import { mapActions } from "vuex"
export default {
  name: 'DishItem',
  props: {
    dish: {
      type: Object,
      default: ()=>({}) 
    },
  },
  methods: {
    ...mapActions(["onDeleteDish"]),
  },
};
</script>
  
  <style scoped>

</style>
  