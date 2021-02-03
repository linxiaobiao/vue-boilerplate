<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>{{name}}</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld/index.vue'
import { fetchDemoData, fetchDemoData2 } from '@/api'

export default {
  name: 'Home',
  data () {
    return {
      name: ''
    }
  },
  components: {
    HelloWorld
  },
  created () {
    this.getDemoData()
    this.getDemoData2()
  },
  methods: {
    async getDemoData () {
      const { data, error } = await fetchDemoData({
        type: 'get api'
      })

      if (error || data.ret !== 0) {
        console.log('网络错误')
        return
      }

      const { name } = data.data

      this.name = name
    },
    // post请求
    async getDemoData2 () {
      const { data, error } = await fetchDemoData2({
        type: 'post api'
      })

      if (error || data.ret !== 0) {
        console.log('网络错误')
        return
      }

      const { name } = data.data

      console.log(name)
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  text-align: center;
}
</style>
