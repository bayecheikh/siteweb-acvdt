<template>
    <div class="support-area pt-60 pb-90">
        <div class="container">
            <div class="row justify-content-center mb-30">
                <div class="col-lg-12 col-sm-12">
                  <h1 class="card-title custom-title">Principales missions</h1>
                  <p class="card-text">Lorum Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit sagittis mi, eu tincidunt mauris placerat a. Lorum Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit sagittis mi, eu tincidunt mauris placerat a.</p>  
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-12 mt-0" v-for="(item, index) in missions" :key="index">
                    <div class="blog-wrap-2 mb-0 height-100">   
                        <div class="card-body">
                            <n-link :to="`/missions/`+item.nid">
                                <h2 class="card-title custom-sub-title">{{item.title}}</h2>
                            </n-link>
                            <n-link :to="`/missions/`+item.nid">
                                <p class="card-text pb-10">{{item.field_description_box}}</p>
                            </n-link>
                            <n-link :to="`/missions/`+item.nid">
                                <img class="card-img-top" :src="siteUrl+item.field_image_d_illustration" alt="image">
                            </n-link>
                        </div>
                        <!-- <n-link :to="`/missions/`+item.nid" class="btn btn-success">
                            Lire la suite
                        </n-link> -->
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
    height: 100% !important;
    box-shadow: 0px -6px 22px 0 #e9ecef;
    padding: 14px;
}
.custom-title{
    font-weight: 600;
    color: #1f8389;
}
.custom-sub-title{
    font-weight: 500;
    color: #1f8389;
    font-size: 20px;
}
</style>
