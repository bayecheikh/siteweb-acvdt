<template>
 
    <div class="product-details-page-wrapper">
        <TheHeader />
        <Breadcrumb :pageTitle="mission.titre ? mission.categorie + ' > '+mission.titre : mission.categorie" />
            <div>
        
        <spinner class="square-loader" :width="'1290px'" :height="'1679px'" :margin="'0px'" :marginBottom="'50px'" :marginTop="'50px'"   v-if="!showContent" ></spinner>
    <div v-if="showContent">
        <div class="Blog-details-inner pt-60 pb-100">
            <div class="container">
                <div class="row justify-content-center ">
                    <div class="col-lg-11">
                        <div class="blog-details-wrapper ml-20">
                            <div class="blog-details-top">
                                <div class="row border-grey pl-30 pt-40 pb-30 pr-30 height-100">
                                    <div class="col-lg-12 ">
                                        <div class="blog-details-img">
                                            <img class="card-img-top" :src="fileUrl+(mission.futured_images && mission.futured_images[0] && mission.futured_images[0].name)" alt="">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <h2 class="card-title custom-sub-title pt-30">{{mission.titre}}</h2>
                                        <div class="blog-details-content">
                                            <div v-html="mission && mission.body"></div>
                                        </div>
                                    </div>
     
                                    <hr class="mt-5">
                                    <template>
                                        <div id="share-network" class="d-flex justify-content-between pt-3">
                                            <span>Partager sur les réseaux sociaux : </span>
                                            <ShareNetwork
                                            v-for="network in networks"
                                            :network="network.network"
                                            :key="network.network"
                                            :style="{backgroundColor: network.color}"
                                            :url="sharing.url"
                                            :title="sharing.title"
                                            :description="sharing.description"
                                            :quote="sharing.quote"
                                            :hashtags="''"
                                            :twitterUser="sharing.twitterUser">
                                            <i :class="network.icon"></i>
                                            </ShareNetwork>
                                        </div>
                                    </template>
                
                                </div>
                            </div>
<!--                             <div class="next-previous-post">
                                <a href="#"> <i class="fa fa-angle-left"></i> prev post</a>
                                <a href="#">next post <i class="fa fa-angle-right"></i></a>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        <TheFooter />
    </div>
</template>

<script>
    import blog from "@/data/blog.json";
    import Spinner from 'vue-spinner/src/SquareLoader.vue';
    export default {
        components: {
            Spinner,
            TheHeader: () => import('@/components/TheHeader'),
            TheFooter: () => import("@/components/TheFooter")
        },
        mounted () {
           this.getMission()  
        },
        data() {
            return {
                showContent: false,
                fileUrl:process.env.fileUrl,
                slug: this.$route.params.slug,
                mission:{
                    titre:''
                },
                siteUrl:process.env.siteUrl,
                sharing: {
                    url: process.env.frontUrl + this.$route.fullPath,
                    title: '',
                    description: '',
                    quote: '',
                    hashtags: '',
                    twitterUser: 'zemna'
                },
                networks: [
                    { network: 'facebook', icon: 'fa fa-facebook', color: '' },
                    { network: 'twitter', icon: 'fa fa-twitter', color: '' },
                    { network: 'whatsapp', icon: 'fa fa-whatsapp', color: '' },
                ]
            }
        },

        

        methods: {
           async getMission(){
                this.progress=true
                this.$axios.$get('/allcontenus/'+this.slug)
                .then(async (response) => {
                    this.showContent = true;
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données detail Reçu ++++++: ', response.data)
                    this.mission = response.data
                    this.sharing.title = response.data.titre
                    this.sharing.description = response.data.resume

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                });
            }
        },

        head() {
            return {
                title: this.mission && this.mission.titre
            }
        },
    };
</script>
<style scoped>
.height-100{
    height: 100% !important;
    box-shadow: 0px -6px 22px 0 #e9ecef;;
}
.custom-title{
    font-weight: 600;
    color: #1f8389;
}
.custom-sub-title{
    font-weight: 500;
    color: #1f8389;
}
#share-network .fa{
    font-size: 28px !important;
}
.square-loader {
  height: 100%;
  width: 100%;
  animation: blink 1s infinite;
  
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>


