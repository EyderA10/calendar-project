<template>
    <div>
        <Header />
        <h1>Schedule Here!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aliquam.s</p>
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    components: { Header },
    name: 'Schedule',
    date() {
        return {
        }
    },
    mounted() {
        console.log('Hello from Schedule component!')
    }
}
</script>

<style scoped></style>