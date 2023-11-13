<template>
  <div>
    <div>
      <label>
        Name
        <input v-model="currentDish.name" type="text" />
      </label>
    </div>
    <div>
      <label>
        Unit
        <input v-model="currentDish.unit" type="text" />
      </label>
    </div>
    <div>
      <label>
        Cost Per Uni
        <input v-model="currentDish.costPerUnit" type="number" />
      </label>
    </div>
    <div>
      <label>
        Cuisine
        <input v-model="currentDish.cuisine" type="text" />
      </label>
    </div>
    <button @click="onAction">Create</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DishesConfig",

  data() {
    return {
      currentDish: {},
    };
  },

  computed: {
    ...mapGetters(["getDishByName"]),
    dishName() {
      return this.$route.params.dishName;
    },
  },

  created() {
    if (this.dishName)
      this.currentDish = { ...this.getDishByName(this.dishName) };
  },

  methods: {
    ...mapActions(["onAddDish"]),
    onAction() {
      this.onAddDish(this.currentDish);
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
