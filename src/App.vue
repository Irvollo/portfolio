<template>
  <div id="app">
    <v-app>
      <page-header />
      <main>
        <v-container fluid>
          <side-bar />
          <router-view/>
        </v-container>
      </main>
    </v-app> 
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import SideBar from '@/components/social/Sidebar.vue'


export default {
  name: 'app',
  components: {
    PageHeader,
    SideBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #FFFFFF;
}
</style>
