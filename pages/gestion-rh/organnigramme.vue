<template>
    <div class="product-details-page-wrapper">
        <TheHeader />
        <Breadcrumb :pageTitle="mission && mission.title" />

        <div class="Blog-details-inner pt-60 pb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="blog-details-wrapper ml-20">
                            <div class="blog-details-top">
                                <h2 class="card-title custom-sub-title pt-30">{{mission.title}}</h2>
                                <div class="blog-details-content">
                                    <div v-html="mission && mission.body"></div>
                                </div>
                                <div class="blog-details-img">
                                    <img :src="mission && (siteUrl+mission.field_ima)" alt=" " width="300">
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
                slug: this.$route.params.slug,
                mission:{},
                siteUrl:process.env.siteUrl,
            }
        },

        

        methods: {
           async getMission(){
                this.progress=true
                this.$axios.$get('/api/quisommesnous/organnigramme?_format=json')
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données Reçu ++++++: ', response)
                    this.mission = response[0]

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                });
            }
        },

        head() {
            return {
                title: this.mission && this.mission.title
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