<template>
    <div class="SkillCards"> 
        <SkillSet />
    </div>
</template>
<script>

import SkillSet from '@/components/SkillSet.vue'

export default {
    components:{
        SkillSet
    }
}

</script>
<style>
    .SkillCards {
        padding-top: 5%;
    }
</style>