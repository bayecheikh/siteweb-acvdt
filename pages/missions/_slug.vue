<template>
    <div class="product-details-page-wrapper">
        <TheHeader />
        <Breadcrumb :pageTitle="mission && mission.title" />

        <div class="Blog-details-inner pt-60 pb-100">
            <div class="container">
                <div class="row justify-content-center ">
                    <div class="col-lg-9 ">
                        <div class="blog-details-wrapper ml-20">
                            <div class="blog-details-top">
                                <div class="row border-grey pl-30 pt-40 pb-30 pr-30 height-100">
                                    <div class="col-lg-4 ">
                                        <div class="blog-details-img">
                                            <img class="card-img-top" :src="fileUrl+(mission.futured_images && mission.futured_images[0] && mission.futured_images[0].name)" alt="">
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <h2 class="card-title custom-sub-title pt-30">{{mission.titre}}</h2>
                                        <div class="blog-details-content">
                                            <div v-html="mission && mission.body"></div>
                                        </div>
                                    </div>
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
        <TheFooter />
    </div>
</template>

<script>
    import blog from "@/data/blog.json";

    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            TheFooter: () => import("@/components/TheFooter")
        },
        mounted () {
           this.getMission()  
        },
        data() {
            return {
                fileUrl:process.env.fileUrl,
                slug: this.$route.params.slug,
                mission:{},
                siteUrl:process.env.siteUrl,
            }
        },

        

        methods: {
           async getMission(){
                this.progress=true
                this.$axios.$get('/allcontenus/'+this.slug)
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données detail Reçu ++++++: ', response.data)
                    this.mission = response.data

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
</style>