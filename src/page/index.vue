<template>
  <div class="tabbar">
    <div>
      <!--TabCotainer-->
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="order">
          <mt-header title="今日订单" fixed>
        </mt-header>
        <mt-navbar class="page-part" v-model="selected">
          <mt-tab-item id="1" style="margin-bottom:0px">待配货</mt-tab-item>
          <mt-tab-item id="2" style="margin-bottom:0px">配送中</mt-tab-item>
          <mt-tab-item id="3" style="margin-bottom:0px">已完成</mt-tab-item>
        </mt-navbar>
        <!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <span>d1</span>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
<span>d1</span>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
<span>d1</span>
      </mt-tab-container-item>
    </mt-tab-container>
        </mt-tab-container-item>
        <mt-tab-container-item id="shop">
          <mt-cell v-for="n in 7" :key="n" :title="'店铺'+n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="my">
          <mt-cell v-for="n in 7" :key="n" :title="'我的'+n"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
 
    <div>
      <!--Tabber-->
      <mt-tabbar v-model="active">
        <mt-tab-item id="order">
          <img slot="icon" src="../assets/logo.png">
          订单处理
        </mt-tab-item>
        <mt-tab-item id="shop">
          <img slot="icon" src="../assets/logo.png">
          店铺管理
        </mt-tab-item>
        <mt-tab-item id="my">
          <img slot="icon" src="../assets/logo.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
 
  </div>
</template>
<script>
 
  export default {
    name: 'index',
    data() {
      return {
        active: 'order',
        selected: '1'
      }
    },
    created() {
      if(!this.$storage.get(this.$config.userInfoName)){
        this.$router.push({ path:'/login'})
      }
    },
    methods: {}
  }
</script>
<style>
