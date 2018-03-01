<template>
  <div class="box">
      <h1>{{msg}}</h1>
      
      <div class="col-sm-6">
        <input type="text" class="form-control" id="content" placeholder="输入信息" v-model="msg">
        <button type="btn" class="btn btn-primary" @click.stop="sub">提交</button>
      </div>

  </div>
</template>
<script>
import axios from 'axios/lib/axios'
export default {
  name: "appdownload",
  data() {
    return {
      msg: "app下载"
    };
  },
  methods: {
      sub:function(){
          this.$store.commit('newChange',this.msg)
      }
  },
  mounted () {
    this.getData()
  },
  methods: {
      getData:function(){
         this.axios.get('http://localhost:8080/api/imglist').then((res) => {
              // var result = res.data
              console.log(res)
            })
      }
  }
};
</script>
<style scoped>

</style>


