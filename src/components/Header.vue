<template>
    <v-toolbar fixed class="blue darken-3">
        <v-tabs
        fixed-tabs
        centered
        v-model="active"
        color="blue darken-3"
        dark
        slider-color="white"
        >
            <v-tab
                v-for="page in this.pages"
                :key="page"
                :to="{
                  name: page.route
                }"
                ripple
                router
                grow
                
            >
                {{ page.name }}
            </v-tab>
        </v-tabs>
    </v-toolbar>
    
</template>

<script>
  export default {
    data () {
      return {
        pages: [
          {name:"About Me", route: "aboutme"},
          {name:"Skills", route: "skills"},
          {name:"Projects", route: "projects"},
          {name:"Blog", route: "blog"},
          {name:"Contact", route: "contact"},
        ],
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0).toString()
      }
    }
  }
</script>
<style>
    
</style>