<template>
    <v-container class="titulo" fluid grid-list-xs>
     <v-flex xs12>
     <v-layout row justify-center>
       <v-card raised>
        <v-card-title primary-title>
          <div>
            <h1 class="headline mb-0">
                <b><vue-typer text='Irvollo is my name, Development is my game.' :repeat='0' @typed='onTyped' caret-animation='expand' type-delay='100'></vue-typer></b>
            </h1>
            <h1 v-if="descTyping" class="headline mb-0">
            <vue-typer text="I'm a Mexican Full-Stack Javascript Developer 🌮" :repeat='0' pre-type-delay=1500 caret-animation='expand' v></vue-typer>
            </h1>
          </div>
        </v-card-title>
      </v-card>
     </v-layout> 
    <br />
    <v-layout row justify-center>
      <v-btn color="primary" raised large>Available for Hire</v-btn>  
    </v-layout>
    </v-flex>
     <v-flex xs12>
       <img class="flatAvatar" src="../static/avatar.png" />
     </v-flex>
    </v-container>
</template>
<script>

import { VueTyper } from 'vue-typer';

export default {
    data () {
        return {
            descTyping: false
        }
    },
    components: {
        VueTyper
    },
    methods: {
        onTyped: function() {
            this.descTyping = true;
        }
    }
}

</script>
<style>
.titulo {
    margin-top: 8%;
    background: #FFFFFF;
    height: 100%;
}

.flatAvatarContainer {
    position: relative;
    text-align: center;
}

.flatAvatar {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0px;
    min-width:300px;
    max-width: 25%;
}

</style>