<template>
    <div class="div-calendar">
        <h1>Schedule Here!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aliquam.s</p>
    </div>
</template>

<script>
export default {
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

<style scoped>
.div-calendar {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 18px;
}
</style>