<template>
    <div class="bar">
        <div v-for="socialNetwork in socialNetworks" :key="socialNetwork">
            <a :href="socialNetwork.url">
                <v-btn :color="color" fab small >
                    <img class="socialLogo" :src="require('../../static/social/' + socialNetwork.icon)" />
                </v-btn>
            </a>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            color: "grey darken-3",
            socialNetworks: [
                {
                    name: "twitter",
                    url: "https://twitter.com/irvollo",
                    icon: "twitter.png",
                    color: "blue"
                },
                {
                    name: "github",
                    url: "https://github.com/irvollo",
                    icon: "github.png",
                    color: "green"
                },
                {
                    instagram: "instagram",
                    url: "https://instagram.com/irvollo",
                    icon: "instagram.png",
                    color: "purple"
                },
                {
                    name: "email",
                    url: "mailto:irvollo@gmail.com",
                    icon: "mail.png",
                    color: "yellow"
                }
            ]
        }
    }
}
</script>

<style>
.bar {
    /* Full-height: remove this if you want "auto" height */
    /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;/* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 350px;
}

.socialLogo {
    height: 60%;
}

</style>