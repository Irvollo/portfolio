<template>
    <v-container class="titulo" fluid grid-list-xs>
     <v-flex xs12>
     <v-layout row justify-center>
       <v-card raised>
        <v-card-title primary-title>
          <div>
            <h1 class="headline mb-0"><b>Irvollo</b> is my name, <b>Development</b> is my game.</h1>
            <h1 class="headline mb-0">I'm a Mexican Full-Stack Javascript Developer 🌮 </h1>
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
    
</script>
<style>
.titulo {
    margin-top: 10%;
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