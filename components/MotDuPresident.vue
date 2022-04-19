<template>
    <div class="bg-gray-3 pt-80 pb-0">
        <div class="container d-flex align-items-stretch custom-max-width">
            <div class="row" v-for="(item, index) in mot_du_president" :key="index">
                <div class="col-lg-3 col-md-3 col-sm-12 pl-0 pr-0">
                    <h2 class="card-title custom-title mb-4 pl-30">{{item.title}}</h2>
                    <div class="team-wrapper mb-0">
                        <div class="team-img">
                            <img :src="siteUrl+item.field_image_illustrati" alt="Photo">
                            <div class="team-action">
                                <a :href="item.field_lien_facebook">
                                    <i class="fa fa-facebook"></i>
                                </a>
                                <a :href="item.field_lien_twitter">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                        <div class="team-content text-center custom-team-box">
                            <h4>{{item.field_prenom_et_nom}}</h4>
                            <span>{{item.field_fonction}}</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-12 d-flex align-items-start flex-column ml-0 pl-0">
                    <div class="mb-auto pl-30">
                        <div v-html="item.body"></div>
                    </div>
                    <div class="d-flex justify-content-between custom-width-100">
                        <div class="p-2"><img src="/img/bg/signature.png" width="100" alt="Photo"></div>
                        <div class="p-2">Voir l'équipe</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import countTo from 'vue-count-to';
    export default {
        components: { countTo },
        mounted: function() {
            this.getMot()
        },
        data () {
            return {
                startVal: 1,
                isVisible: false,
                funFacts: [
                    {
                        id: 1,
                        endVal: 360,
                        title: "Project Done",
                        icon: "pe-7s-portfolio"
                    },
                    {
                        id: 2,
                        endVal: 690,
                        title: "Cups Of Coffee",
                        icon: "pe-7s-cup"
                    },
                    {
                        id: 3,
                        endVal: 580,
                        title: "Branding",
                        icon: "pe-7s-light"
                    },
                    {
                        id: 4,
                        endVal: 850,
                        title: "Happy Clients",
                        icon: "pe-7s-smile"
                    }
                ],
                mot_du_president:[],
                siteUrl:process.env.siteUrl,
            }
        },
        methods: {
            getMot(){
                this.progress=true
                this.$axios.$get('/api/mot-du-president?_format=json')
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données Reçu ++++++: ', response)
                    this.mot_du_president = response

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                });
            },
            visibilityChanged (isVisible) {
                this.isVisible = isVisible
            },
        },
    }
</script>
<style scoped>
.container{
    max-width: 1800px !important;
}
.custom-team-box{
  background: #0D6E77;
  width: 100%;
  height: 90px;
}
.custom-title{
    font-weight: 600;
    color: #1f8389;
}
.team-wrapper .team-content span {
  color: white;
}
.team-wrapper .team-content h4, .team-wrapper .team-content .h4 {
  color: white;
}
.custom-width-100{
    width: 100%;
    padding: 26.5px 10px 23px;
    background-color: rgb(213, 222, 230);
    height: 90px;
}
</style>
