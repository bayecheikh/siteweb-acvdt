<template>
     <div>
        <div style="display: flex;">
        <spinner class="square-loader" :width="'645px'" :height="'996.283px'" :margin="'0px'" :marginTop="'50px'"    v-if="!showContent" ></spinner>
         <spinner class="square-loader" :width="'645px'" :height="'996.283px'" :margin="'0px'" :marginLeft="'0px'" :marginTop="'50px'"    v-if="!showContent" ></spinner>
        </div>

    <div v-if="showContent">
    <div class="support-area pt-40 pb-20">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-sm-12 mt-0" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'projets')" :key="index">
                            <div class="mb-0 height-100">   
                                <div class="">
                                    <n-link :to="`/contenus/`+item.id">
                                        <img class="card-img-top" :src="fileUrl+(item.futured_images[0] && item.futured_images[0].name)" alt="image">
                                    </n-link>
                                </div>
                                <!-- <n-link :to="`/contenus/`+item.id" class="btn btn-success">
                                    Lire la suite
                                </n-link> -->
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 mt-0" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'projets')" :key="index">
                            <div class="mb-0 height-100">   
                                <div class="">
                                    <n-link :to="`/contenus/`+item.id">
                                        <img height="150" class="card-img-top" :src="fileUrl+(item.futured_images[0] && item.futured_images[0].name)" alt="image">
                                    </n-link>
                                </div>
                                <!-- <n-link :to="`/contenus/`+item.id" class="btn btn-success">
                                    Lire la suite
                                </n-link> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12 bg-projet pt-4 pl-4">
                    <div class="row justify-content-center mb-30">
                        <div class="col-lg- col-sm-12" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'projets-intro')" :key="index">
                            <h1 class="card-title custom-title">{{item.titre}}</h1>
                            <div class="card-text custom-body " v-html="item.resume"></div> 
                            <hr style="width:50%; color:#ffff; height:10px"> 
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-sm-12 mt-0" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'projets')" :key="index">
                            <div class="mb-10 ">   
                                <div class="">
                                    <n-link :to="`/contenus/`+item.id">
                                        <h2 class="card-title custom-sub-title">{{item.titre}}</h2>
                                    </n-link>
                                    <n-link :to="`/contenus/`+item.id">
                                        <p class="card-text custom-body pb-10">{{$truncate(item.resume,200)}}</p>
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
                missions: [],
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
    color: rgba(255, 255, 255, 0.874) !important;
}
.custom-sub-title{
    font-weight: 600;
    color: rgba(255, 255, 255, 0.874) !important;
    font-size: 16px;
}
.custom-body{
    color: rgba(255, 255, 255, 0.874) !important;
}

.bg-projet{
    background-color: #0060a8;
    padding: 40px;
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


