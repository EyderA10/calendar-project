<template>
    <div class="header">
        <h1>Header</h1>
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
    .header, h1, input, p, img {
        display: inline-block;
        margin-left: 10px;
    }
</style>