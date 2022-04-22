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
                <div class="col-lg-4 col-sm-12 mt-0" v-for="(item, index) in statistiques" :key="index">
                    <div class="blog-wrap-2 mb-0 height-100">   
                        <div class="card-body">
                            <!-- <n-link :to="item.field_page" class="custom-center-box">
                                <img height="100" class="" :src="siteUrl+item.field_icon" alt="image">
                            </n-link> -->
                            <n-link :to="item.field_categorie_marche_1" class="custom-center-box">
                                <h2 class="card-title custom-sub-title text-center pt-15">{{item.field_categorie_marche}}</h2>
                            </n-link>
                            <n-link :to="item.field_categorie_marche_1" class="custom-center-box">
                                <p class="card-text pb-10 text-center">{{item.nid}}</p>
                            </n-link>   
                        </div>
                        <!-- <n-link :to="`/statistiques/`+item.nid" class="btn btn-success">
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
            this.getListStatistique()
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
    color: #1f8389;
}
.custom-sub-title{
    font-weight: 500;
    color: #1f8389;
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
