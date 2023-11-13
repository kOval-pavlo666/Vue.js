<template>
  <div>
    <center>
    <dish-filter/>
    <button @click="onCreate">Create a company</button>
    <table>
      <tr>
        <td>Name</td>
        <td>Unit</td>
        <td>Cost per unit</td>
        <td>Cuisine</td>
        <td>Delete</td>
      </tr>
      <tr v-for="dish in dishes" :key="dish.id">
        <dish-item :dish="dish" />
      </tr>
    </table>
  </center>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import DishItem from "./DishItem.vue";
import DishFilter from "./DishFilter.vue";

export default {
  components: {
    DishItem,
    DishFilter,
  },
  computed: {
    ...mapGetters(["dishes"]),
  },
  methods: {
    onCreate() {
      this.$router.push({
        name: "config",
      });
    },
  },
};
</script>
  
<style>
</style>
  