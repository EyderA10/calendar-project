<template>
    <div class="routes">
        <h4 class="routes__title">Routes Available</h4>
        <ul class="routes__list">
            <li v-for="route in routes" :key="route.id" @click="findByRouteId(route.id)">{{ route.title }}</li>
        </ul>
    </div>
</template>

<script>
import { getRoutes } from '../services/requests'
export default {
    name: 'RouteList',
    data() {
        return {
            routes: []
        }
    },
    created() {
        this.getAllRoutes()
    },
    methods: {
        getAllRoutes() {
            getRoutes().then(({ data }) => {
                data.forEach((routes) => {
                    this.routes.push({
                        id: routes.id,
                        title: routes.title
                    })
                })
            })
                .catch(err => console.log(err))
        },
        findByRouteId(id) {
            this.$emit('getRouteId', id)
        }
    }
}
</script>

<style scoped>
.routes {
    margin-left: 20px;
    width: 40%;
}

.routes .routes__list {
    height: 10%;
    overflow: auto;
    list-style: none;
}

.routes .routes__list li {
    cursor: pointer;
}

.routes .routes__list li:hover {
    background-color: lightgrey;
}
</style>