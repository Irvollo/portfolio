<template>
    <v-container grid-list-xs class="projects">
        <v-card hover class="project">
            <v-layout wrap>
                <v-flex xs12 sm4 md4 class="thumbnail">
                    <img class="preview" src="https://images2.imgbox.com/f5/29/Cyca5n1Z_o.gif" />
                </v-flex>
                <v-flex xs12 sm8 md8 class="information">
                    <div class="resume">
                        <h1>OPTC Teams </h1>
                        <v-divider></v-divider>
                        <div class="description">
                            A platform created for the  game One Piece Treasure Cruise to post and create guides to help other players, created in Ruby on Rails, PostgresQL and deployed in Heroku.
                        </div>
                        <v-divider></v-divider>
                        <div class="tags">
                            <v-chip disabled small color="green" text-color="white">EJS</v-chip>
                            <v-chip disabled small color="red" text-color="white">Ruby on Rails</v-chip>
                            <v-chip disabled small color="red" text-color="white">PostgresQL</v-chip>
                            <v-chip disabled small color="orange" text-color="white">Heroku</v-chip>
                        </div>
                        <div class="actions">
                            <a href="https://optc-teams.herokuapp.com"><v-btn color="primary">Live Demo</v-btn></a>
                            <a href="https://github.com/Irvollo/OPTC-Team-Database"><v-btn color="primary">Github</v-btn></a>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
        <v-card hover class="project">
            <v-layout wrap>
                <v-flex xs12 sm4 md4 class="thumbnail">
                    <img class="preview" src="https://images2.imgbox.com/de/7f/61FGtKn5_o.gif" />
                </v-flex>
                <v-flex xs12 sm8 md8 class="information">
                    <div class="resume">
                        <h1>IOTA Online Fake Seed Generator </h1>
                        <v-divider></v-divider>
                        <div class="description">
                            In January 2018, almost $4M USD were stolen from people using online seed generators for Cryptocurrencies.
                            The objective of this project is to educate people not to use online seed generators. Front-End Only.
                        </div>
                        <v-divider></v-divider>
                        <div class="tags">
                            <v-chip disabled small color="green" text-color="white">React.js</v-chip>
                            <v-chip disabled small color="green" text-color="white">Semantic UI</v-chip>
                            <v-chip disabled small color="orange" text-color="white">Firebase</v-chip>
                        </div>
                        <div class="actions">
                            <a href="https://iota-seed-generator.firebaseapp.com"><v-btn color="primary">Live Demo</v-btn></a>
                            <a href="https://github.com/Irvollo/Iota-Seed-Generator"><v-btn color="primary">Github</v-btn></a>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
        <v-card hover class="project">
            <v-layout wrap>
                <v-flex xs12 sm4 md4 class="thumbnail">
                    <img class="preview" src="https://images2.imgbox.com/36/01/ipk44yGJ_o.gif" />
                </v-flex>
                <v-flex xs12 sm8 md8 class="information">
                    <div class="resume">
                        <h1>Tab tracker </h1>
                        <v-divider></v-divider>
                        <div class="description">
                            A Vue.js / Express.js web application for keeping track of guitar tabs.
                        </div>
                        <v-divider></v-divider>
                        <div class="tags">
                            <v-chip disabled small color="green" text-color="white">Vue.js</v-chip>
                            <v-chip disabled small color="red" text-color="white">Node.js</v-chip>
                            <v-chip disabled small color="red" text-color="white">Express.js</v-chip>
                            <v-chip disabled small color="red" text-color="white">PostgresQL</v-chip>
                        </div>
                        <div class="actions">
                            <v-btn disabled color="primary">Live Demo</v-btn>
                            <a href="https://github.com/Irvollo/tab-tracker"><v-btn color="primary">Github</v-btn></a>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
        <v-card hover class="project">
            <v-layout wrap>
                <v-flex xs12 sm4 md4 class="thumbnail">
                    <img class="preview" src="https://images2.imgbox.com/a3/65/p3lAhCS9_o.gif" />
                </v-flex>
                <v-flex xs12 sm8 md8 class="information">
                    <div class="resume">
                        <h1>Binary - The Game </h1>
                        <v-divider></v-divider>
                        <div class="description">
                            iOS Native Game. Make connections accross the tiles in the correct order 
                            and score as many points as you can doing binary numbers.
                        </div>
                        <v-divider></v-divider>
                        <div class="tags">
                            <v-chip disabled small color="teal" text-color="white">Swift</v-chip>
                            <v-chip disabled small color="orange" text-color="white">Firebase</v-chip>
                        </div>
                        <div class="actions">
                            <v-btn disabled color="primary">Live Demo</v-btn>
                            <v-btn disabled color="primary">Github</v-btn>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>
<script>
    
</script>
<style>
    .projects {
        margin-top: 5em;
        margin-left: 5%;
        width: 90%;
        text-align: left;
    }

    .thumbnail {
        height: auto;
    }

    .preview {
        max-width: 100%;
        height: auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .project {
        margin-bottom: 20px;
    }

    .information {
        margin-top: 10px;
        width: 90%;
    }

    .description {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    .tags {
        margin-top: 10px;
    }

    .resume {
        margin-left: 5%;
        width: 90%;
        text-align: justify;
    }
</style>