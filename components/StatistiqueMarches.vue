<template>
    <div class="support-area pt-60 pb-90">
        <div class="container">
            <div class="row justify-content-center mb-30">
                <div class="col-lg-12 col-sm-12">
                  <h1 class="card-title custom-title">Statistiques</h1>
                  <p class="card-text">Lorum Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit sagittis mi, eu tincidunt mauris placerat a. Lorum Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit sagittis mi, eu tincidunt mauris placerat a.</p>  
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-4 col-sm-12 mt-0">
                    <div class="blog-wrap-2 mb-0 height-100">   
                        <div class="card-body">
                            <n-link to="" class="custom-center-box">
                                <p class="card-text  text-center pt-15">Plan de passation</p>
                            </n-link>
                            <n-link to="" class="custom-center-box">
                                <h2 class="card-title custom-sub-title pb-10 text-center">{{listmarchepublics.filter(marchepublic => marchepublic.categories[0].slug === 'plan-de-passation').length}}</h2>
                            </n-link>   
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 mt-0">
                    <div class="blog-wrap-2 mb-0 height-100">   
                        <div class="card-body">
                            <n-link to="" class="custom-center-box">
                                <p class="card-text  text-center pt-15">Avis généraux</p>
                            </n-link>
                            <n-link to="" class="custom-center-box">
                                <h2 class="card-title custom-sub-title pb-10 text-center">{{listmarchepublics.filter(marchepublic => marchepublic.categories[0].slug === 'avis-generaux').length}}</h2>
                            </n-link>   
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 mt-0">
                    <div class="blog-wrap-2 mb-0 height-100">   
                        <div class="card-body">
                            <n-link to="" class="custom-center-box">
                                <p class="card-text  text-center pt-15">Avis d'appel à concurence</p>
                            </n-link>
                            <n-link to="" class="custom-center-box">
                                <h2 class="card-title custom-sub-title pb-10 text-center">{{listmarchepublics.filter(marchepublic => marchepublic.categories[0].slug === 'plan-de-passation').length}}</h2>
                            </n-link>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        
        computed: mapGetters({
            listmarchepublics: 'marchepublics/listmarchepublics',
        }),
        mounted: function() {
            //this.getListStatistique()
        },
        methods: {
            getListStatistique(){
                this.progress=true
                this.$axios.$get('/api/statistiques-marches?_format=json')
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données Reçu ++++++: ', response)
                    this.statistiques = response

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
                statistiques: []
            }
        },
    };
</script>
<style scoped>
.height-100{
    height: 100% !important;
    box-shadow: 0px -6px 22px 0 #e9ecef;
    padding: 14px;
}
.custom-title{
    font-weight: 600;
    color: #0060a8;
}
.custom-sub-title{
    font-weight: 500;
    color: #0060a8;
    font-size: 20px;
}
.custom-center-box{
    display: flex;
    justify-content: center;
}
.text-center{
    text-align: center;
}
</style>
