<template>
    <div class="support-area pt-100 pb-90">
        <div class="container">
            <div class="row mtn-30 justify-content-center">
                <div class="col-lg-4 col-sm-12 mt-30" v-for="(item, index) in missions" :key="index">
                    <div class="card height-100">   
                        <div class="card-body">
                            <h2 class="card-title custom-title">{{item.title}}</h2>
                            <p class="card-text">{{item.body}}</p>
                            <img class="card-img-top" :src="siteUrl+item.field_image_d_illustration" alt="Card image cap">
                        </div>
                        <a href="#" class="btn btn-success">Lire la suite</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function() {
            this.getListMission()
        },
        methods: {
            getUrlImage(url){
                return url.substring(str.indexOf('drupal-api') + 1);
            },
            getListMission(){
                this.progress=true
                this.$axios.$get('/api/missions?_format=json')
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données Reçu ++++++: ', response)
                    this.missions = response

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                });
            }
        },
        data() {
            return {
                siteUrl:process.env.siteUrl,
                missions: []
            }
        },
    };
</script>
<style scoped>
.height-100{
    min-height: 100% !important;
}
.custom-title{
    font-weight: 600;
    color: #1f8389;
}
</style>
