<template>
  <div id="app">
    <navHeader></navHeader>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import navHeader from '@/components/Header'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    navHeader
  }
}
</script>

<style>
.box{
  margin-top: 48px;
}
h1,h2{
  font-weight: normal;
}
</style>
