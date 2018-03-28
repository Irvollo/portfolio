<template>
    <v-container flex class="blogpost">
        <v-card hover class="WPpost" v-for="post in posts" :key="post">
            <v-card-title primary-title>
                <div class="headline">{{post.title[0]}}</div>
            </v-card-title>
            <v-card-media v-if="post['media:thumbnail']"
              contain
              height="200px"
              :src="post['media:thumbnail'][0].$.url"
            >
            </v-card-media>
            <v-divider></v-divider>
            <v-card-text v-if="post['media:thumbnail']" class="postDescription">
                <div v-html="post['content:encoded'][0].substring(0,300).concat('...')"></div>
            </v-card-text>
            <v-card-text v-else class="postDescription">
                <div v-html="post['content:encoded'][0].substring(0,600).concat('...')"></div>
            </v-card-text>
            <v-card-actions>
                <a :href="post.link[0]"><v-btn flat color="blue">Read Article</v-btn></a>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>
import axios from 'axios';
import xml2js from 'xml2js';

export default {
    data () {
        return {
            posts: null,
            errors: null
        }
    },
    created() {
        axios.get('https://crossorigin.me/https://irvollo.wordpress.com/feed/')
        .then(response => {
            var self = this;
            xml2js.parseString(response.data, function (err, result) {
                const rssPosts = result.rss.channel[0].item;
                console.log(result.rss.channel[0].item);
                self.posts = rssPosts;
            })  
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}
    
</script>
<style>
    .blogpost {
        margin-top: 5%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 5%;
        width: 90%;
        justify-content: center;
    }

    .WPpost {
        min-width: 20%;
        max-width: 300px;
        margin-left: 10px;
        margin-bottom: 10px;
        word-wrap: break-word;
        flex-grow: 3;
    }

    .postDescription {
        max-width: 100%;
        text-align: justify;
    }

</style>