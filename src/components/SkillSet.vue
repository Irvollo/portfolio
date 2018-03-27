<template>
    <div class="set">
        <v-card hover class="skillType"> 
            <v-card-title primary-title>
                <div>
                    <div class="headline"><v-icon medium  color="gray">code</v-icon> FrontEnd </div>
                    <div><span class="grey--text">Responsive design - UI - UX - SEO</span></div>
                    <v-divider></v-divider>
                </div>
            </v-card-title>
            <v-card-text>
                <div class="skills">
                    <span color="grey darken-3">Vue.js</span>
                    <v-progress-linear  value="100" height="5" color="green"></v-progress-linear>
                    <span color="grey darken-3">React.js</span>
                    <v-progress-linear  value="80" height="5" color="green"></v-progress-linear>
                    <span color="grey darken-3">JQuery</span>
                    <v-progress-linear  value="80" height="5" color="green"></v-progress-linear>
                </div>
            </v-card-text>
        </v-card>
        <br />
        <v-card hover class="skillType"> 
            <v-card-title primary-title>
                <div>
                    <div class="headline"><v-icon medium color="gray">storage</v-icon>  BackEnd</div>
                    <div><span class="grey--text"> Servers - Database - API - Containers</span></div>
                    <v-divider></v-divider>
                </div>
            </v-card-title>
            <v-card-text>
                <div class="skills">
                    <span color="grey darken-3">Node.js</span>
                    <v-progress-linear  value="100" height="5" color="red"></v-progress-linear>
                    <span color="grey darken-3">Express</span>
                    <v-progress-linear  value="100" height="5" color="red"></v-progress-linear>
                    <span color="grey darken-3">MongoDB</span>
                    <v-progress-linear  value="80" height="5" color="red"></v-progress-linear>
                    <span color="grey darken-3">PostgresQL</span>
                    <v-progress-linear  value="80" height="5" color="red"></v-progress-linear>
                </div>
            </v-card-text>
        </v-card>
        <br />
        <v-card hover class="skillType"> 
            <v-card-title primary-title>
                <div>
                    <div class="headline"><v-icon medium color="gray">build</v-icon> DevOps</div>
                    <div><span class="grey--text">Cloud - Operative Systems - CDN</span></div>
                    <v-divider></v-divider>
                </div>
            </v-card-title>
            <v-card-text>
                <div class="skills">
                    <span color="grey darken-3">Heroku</span>
                    <v-progress-linear  value="85" height="5" color="orange"></v-progress-linear>
                    <span color="grey darken-3">Docker</span>
                    <v-progress-linear  value="65" height="5" color="orange"></v-progress-linear>
                    <span color="grey darken-3">Google Cloud Platform</span>
                    <v-progress-linear  value="85" height="5" color="orange"></v-progress-linear>
                    <span color="grey darken-3">AWS</span>
                    <v-progress-linear  value="65" height="5" color="orange"></v-progress-linear>
                </div>
            </v-card-text>
        </v-card>
        <br />
        <v-card hover class="skillType"> 
            <v-card-title primary-title>
                <div>
                    <div class="headline"><v-icon medium color="gray">smartphone</v-icon> Mobile</div>
                    <div><span class="grey--text">Cross Platform - iOS - Android</span></div>
                    <v-divider></v-divider>
                </div>
            </v-card-title>
            <v-card-text>
                <div class="skills">
                    <span color="grey darken-3">React Native</span>
                    <v-progress-linear  value="90" height="5" color="teal"></v-progress-linear>
                    <span color="grey darken-3">Swift</span>
                    <v-progress-linear  value="70" height="5" color="teal"></v-progress-linear>
                    <span color="grey darken-3">PhoneGap / Cordova</span>
                    <v-progress-linear  value="65" height="5" color="teal"></v-progress-linear>
                </div>
            </v-card-text>
        </v-card>
        <br />
        <v-card hover class="skillType"> 
            <v-card-title primary-title>
                <div>
                    <div class="headline"><v-icon medium color="gray">device_hub</v-icon> Development</div>
                    <div><span class="grey--text">Project Management Esentials</span></div>
                    <v-divider></v-divider>
                </div>
            </v-card-title>
            <v-card-text>
                <div class="skills">
                    <span color="grey darken-3">Git</span>
                    <v-progress-linear  value="100" height="5" color="amber"></v-progress-linear>
                    <span color="grey darken-3">Test Driven Development</span>
                    <v-progress-linear  value="85" height="5" color="amber"></v-progress-linear>
                    <span color="grey darken-3">Agile</span>
                    <v-progress-linear  value="85" height="5" color="amber"></v-progress-linear>
                </div>
            </v-card-text>
        </v-card>
        <br />
        <v-card hover class="skillType"> 
            <v-card-title primary-title>
                <div>
                    <div class="headline"><v-icon medium color="gray">description</v-icon>Certifications</div>
                    <div><span class="grey--text">Education and More</span></div>
                    <v-divider></v-divider>
                </div>
            </v-card-title>
            <v-card-text>
                <div class="skills">
                    <span color="grey darken-3"><v-icon medium color="blue">star</v-icon> Business and Information Technology Engineer (2012- 2016)</span>
                    <div><span class="grey--text">Instituto Tecnológico de Estudios Superiores de Monterrey</span></div>
                    <span color="grey darken-3"><v-icon medium  color="blue">star</v-icon>COBIT 5</span>
                    <div><span class="grey--text">ISACA 2015</span></div>
                    <span color="grey darken-3"><v-icon medium color="blue">star</v-icon> ITIL V3</span>
                    <div><span class="grey--text">ISACA 2016</span></div>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

</script>

<style>
.set {
    text-align: center;
    width: 90%;
    margin-left:5%;
    display: flex;
    flex-wrap: wrap;
}

.skills {
    text-align:left;
}

.skillType {
    margin-right: 15px;
    margin-top: 15px;
    flex-grow:2;
}

</style>