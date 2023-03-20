<template>
     <div>
        <spinner class="square-loader" :width="'1296px'" :height="'500px'" :margin="'0px'"  v-if="!showContent" ></spinner>


    <div v-if="showContent">
    <div class="support-area pt-60 pb-40 grey-bg">
        <div class="container">
            <div class="row justify-content-center custom-row">
                <div class="col-lg-6 col-sm-6 mt-0 custom-col">
                    <div class="row justify-content-center mb-4">
                        <div class="col-lg-6 col-sm-6 mt-0" >
                            <div class="mb-0 border-grey-tarif bg-blue">   
                                <div class="card-body text-sm-center">
                                        <h3 class="card-title custom-title-white">
                                            CATÉGORIES  
                                        </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 mt-0" >
                            <div class="mb-0 border-grey-tarif bg-blue">   
                                <div class="card-body text-sm-center">
                                    <h3 class="card-title custom-title-white">
                                            TARIFS
                                        </h3>
                                </div>
                                <!-- <n-link :to="`/missions/`+item.id" class="btn btn-success">
                                    Lire la suite
                                </n-link> -->
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center mb-0" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'tarifs-peages')" :key="index">
                        <div class="col-lg-6 col-sm-6 mt-0" >
                            <div class="border-grey-tarif height-101 bg-white d-flex align-items-center">   
                                <div class="card-body text-sm-center">
                                    <img width="80" class="" :src="fileUrl+(item.futured_images[0] && item.futured_images[0].name)" alt="image">
                                </div>
                                <!-- <n-link :to="`/missions/`+item.id" class="btn btn-success">
                                    Lire la suite
                                </n-link> -->
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 mt-0" >
                            <div class="mb-0 border-grey-tarif height-101 bg-white d-flex align-items-center">   
                                <div class="card-body text-sm-center">
                                        <h2 class="card-title custom-title-dark">
                                            {{item.resume}}    
                                        </h2>
                                </div>
                                <!-- <n-link :to="`/missions/`+item.id" class="btn btn-success">
                                    Lire la suite
                                </n-link> -->
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-6 col-sm-6 mt-0 height-100 custom-col bg-white">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-sm-12 custom-padding" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'penalites-intro')" :key="index">
                        <h1 class="card-title custom-title">{{item.titre}}</h1>
                        <div class="card-text " v-html="item.body"></div>  
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
    color: #0060a8;
}
.custom-title-white{
    font-weight: 600;
    font-size: 26px !important;
    color: #ffffff;
}
.custom-title-dark{
    font-weight: 600;
    font-size: 26px !important;
    color: #1b1b1b;
}
.custom-sub-title{
    font-weight: 500;
    color: #0060a8;
    font-size: 16px !important;
}
.height-101 {
  height: 100% !important;
  padding: 0px;
}
.bg-blue {
  background-color: #0060a8;
}
.border-grey-tarif {
  border: solid 2px #e9ecef;
  border-bottom: solid 1px #e9ecef;

}
.custom-row {
    display: table;
}

.custom-col{
    float: none;
    display: table-cell;
    vertical-align: top;
}
.custom-padding{
    padding: 10px !important;
padding-left: 47px !important;
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
