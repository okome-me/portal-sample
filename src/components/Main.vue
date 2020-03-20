<template>
  <div id="main">
    <div v-show="isLoading" class="loader">Now loading...</div>
    <el-container v-show="!isLoading">
        <el-container>
        <el-aside width="200px">
            <el-col :span="24">
            <router-link to="/">
                <img src="../../static/img/logo.png" height="100">
            </router-link>
            <el-menu default-active="1" class="el-menu-vertical-demo">

                <el-menu-item index="9">
                    <i class="el-icon-document"></i>
                    <router-link to="/login"><span>Logout</span></router-link>
                </el-menu-item>
                <el-menu-item  v-for='(menu, index) in menues' :key='index'>
                    <i class="el-icon-setting"></i>
                    <router-link :to="{ name: 'Iframe', params: { hp: menu.name ,menu: menu } }">
                        <span>{{ menu.name }}</span>
                    </router-link>
                </el-menu-item>
            </el-menu>
            </el-col>
        </el-aside>

        <el-main>
            <!-- 7. The contents will be load here -->
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Main',
  data () {
    return {
      menues: [],
      isLoading: false
    }
  },
  created () {
    this.initilize()
  },
  methods: {
    initilize () {
      let url = 'http://localhost:3000/menu'

      this.isLoading = true
      axios.get(url).then(response => {
        this.menues = response.data
        console.log('finish to load menu')
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        this.isLoading = false
      })
    }
  }
}
</script>

<style>
#main{
    height: 100%;
}
.el-container{
    height: 100%;
}
.el-aside{
    border-right: solid 1px #e6e6e6;
}
.el-menu{
    border: none;
}
main.el-main {
    height: 100%;
    padding: 0;
}
</style>
