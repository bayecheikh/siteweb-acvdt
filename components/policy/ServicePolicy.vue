<template>
     <div>
        <spinner class="square-loader" :width="'1290px'" :height="'170.6px'" :margin="'0px'" :marginTop="'30px'"   v-if="!showContent" ></spinner>
        <spinner class="square-loader" :width="'1290px'" :height="'425.2px'" :margin="'0px'"   v-if="!showContent" ></spinner>


    <div v-if="showContent">
    <div class="support-area pt-60 pb-40">
        <div class="container">
            <div class="row justify-content-center mb-30">
                <div class="col-lg-12 col-sm-12" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'mission-intro')" :key="index">
                  <h1 class="card-title custom-title">{{item.titre}}</h1>
                  <div class="card-text " v-html="item.resume"></div>  
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-12 mt-0" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'mission-section')" :key="index">
                    <div class="blog-wrap-2 mb-0 height-100 border-bottom-green">   
                        <div class="card-body">
                            <n-link :to="`/contenus/`+item.id">
                                <h2 class="card-title custom-sub-title">{{item.titre}}</h2>
                            </n-link>
                            <n-link :to="`/contenus/`+item.id">
                                <p class="card-text pb-10">{{$truncate(item.resume,150)}}</p>
                            </n-link>
                            <n-link :to="`/contenus/`+item.id">
                                <img height="230" class="card-img-top" :src="fileUrl+(item.futured_images[0] && item.futured_images[0].name)" alt="image">
                            </n-link>
                        </div>
                        <!-- <n-link :to="`/contenus/`+item.id" class="btn btn-success">
                            Lire la suite
                        </n-link> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import Spinner from 'vue-spinner/src/SquareLoader.vue';
import { mapMutations, mapGetters } from 'vuex'
    export default {
        components: {
            Spinner,
        },
        computed: mapGetters({
            listcontenus: 'contenus/listcontenus',
        }),
        mounted() {
    this.$store.dispatch("contenus/getList").then(() => {
        this.showContent = true;
    });
  },
        methods: {
            getUrlImage(url){
                return url.substring(str.indexOf('drupal-api') + 1);
            }
            
        },
        data() {
            return {
                showContent: false,
                siteUrl:process.env.siteUrl,
                fileUrl:process.env.fileUrl,
                contenus: [],
                mission_intro:[]
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
    font-size: 26px !important;
    color: #0060a8;
}
.custom-sub-title{
    font-weight: 500;
    color: #0060a8;
    font-size: 16px !important;
}
.border-bottom-green{
  border-bottom: solid 3px #08b708!important;
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

