<template>
    <div>
        <v-card flat class="title">
          <v-card-text>
            <h1>
                Skills
            </h1>
            <Sidebar />
          </v-card-text>
        </v-card>
    </div>
</template>
<script>

import Sidebar from '@/components/social/Sidebar.vue'

export default {
    components:{
        Sidebar
    }
}

</script>
<style>
    .title {
        margin-top: 15%;
    }
</style>