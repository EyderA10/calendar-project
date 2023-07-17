
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
  width: 80%;
  height: 80%;
  display: flex;
  padding: 20px;
  justify-content: space-around;
}
</style>
