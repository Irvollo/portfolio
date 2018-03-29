<template>
    <div class="contactForm">
        <v-toolbar color="primary">
           <v-toolbar-title class="white--text">Let's talk!</v-toolbar-title>
        </v-toolbar>
        <v-card>
            <v-form class="formulary" id="nativeForm" method="post" action='https://www.getform.org/f/6c5042eb-e25b-48f6-9595-2187e8e0f09b'  v-model="valid">
                <v-text-field
                label="Name"
                v-model="name"
                :error-messages="nameErrors"
                :counter="15"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                required
                name="name"
                ></v-text-field>
                <v-text-field
                label="E-mail"
                v-model="email"
                :error-messages="emailErrors"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                required
                name="email"
                ></v-text-field>
                <v-text-field
                label="What's on your mind?"
                v-model="description"
                :error-messages="descriptionErrors"
                @input="$v.description.$touch()"
                @blur="$v.description.$touch()"
                required
                multi-line
                name="message"
                ></v-text-field>
                <v-btn flat color="blue" type="submit">submit</v-btn>
            </v-form>
        </v-card>
    </div>
</template>
<script>
    export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      select: null
    })
}
</script>
<style>
    .contactForm {
        margin-top: 5em;
        margin-left: 15%;
        width:70%;
    }
    .formulary {
        margin-left: 10%;
        width:80%;
    }
</style>