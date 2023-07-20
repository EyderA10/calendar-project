<template>
    <div class="header">
        <h3>Schedules</h3>
        <input type="search" name="search" id="">
        <p>icon</p>
        <p>image</p>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .header {
        margin-left: 40px;
    }
    .header, h3, input, p, img {
        display: inline-block;
    }

    .header input, p, img {
        margin-left: 50px;
    }
</style>