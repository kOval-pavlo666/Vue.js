<template>
    <div>
        Фільтрація:
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
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'DishFilter',

    data() {
        return {
            currentDish: {},
        }
    },

    watch: {
        currentDish: {
            handler(newFilter) {
                this.onUpdateFilter(newFilter)
            },
            deep: true,
        },
    },

    methods: {
        ...mapActions(['onUpdateFilter']),
    },
}
</script>

<style lang="scss" scoped></style>
