
<template>
  <div class="container">
    <SideBar/>
    <Schedule/>
  </div>
</template>

<script>
import Schedule from './components/Schedule.vue'
import SideBar from './components/SideBar.vue'
export default {
  components: {
    Schedule,
    SideBar
  }
}
</script>

<style scoped>
.container {
  width: 75%;
  height: 100%;
  display: flex;
  padding: 50px;
  justify-content: space-around;
  margin: 0 auto;
}
</style>
