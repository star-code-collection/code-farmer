<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="row">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" to='/'>
                        <img src="./../assets/logo.png"/>
                    </router-link> 
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav header-color navbar-left">
                        <li>
                            <router-link to='/familycaredoc'>家庭医生服务</router-link> 
                        </li>
                        <li>
                        <router-link to='/familyterminal'>家庭智能终端</router-link>
                        </li>
                        <li>
                        <router-link to='/appdownload'>App</router-link>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <button class="btn btn-info">直接购买</button>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'navHeader',
  data () {
      return {
          
      }
  }
}
</script>
<style scoped>
.btn-info{
  margin-top: 7px
}
.navbar-brand img{
  width: 40px;
  height: 40px;
  margin-top: -7px;
}
.navbar{
  border: 0;
}
</style>


