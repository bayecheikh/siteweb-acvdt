<template>
    <div class="support-area pt-60 pb-40 grey-bg">
        <div class="container">
            <div class="row justify-content-center custom-row margin-left-0" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'numeros-utiles-intro')" :key="index">
                <div class="col-lg-6 col-sm-6 mt-0 custom-col">
                    <div class="mb-0">
                        <div class="">
                            <img width="500" :src="fileUrl+(item.futured_images[0] && item.futured_images[0].name)" alt="Photo">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 mt-0 height-102 custom-col ">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-sm-6 custom-padding-white text-sm-center" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'numeros-utiles')" :key="index">
                        <h1 class="card-title custom-title text-green">{{item.titre}}</h1>
                        <div class="card-text numero" v-html="item.body"></div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
    import countTo from 'vue-count-to';
    export default {
        computed: mapGetters({
            listcontenus: 'contenus/listcontenus',
        }),
        methods: {
            getUrlImage(url){
                return url.substring(str.indexOf('drupal-api') + 1);
            }
            
        },
        data() {
            return {
                siteUrl:process.env.siteUrl,
                fileUrl:process.env.fileUrl,
                missions: [],
                mission_intro:[]
            }
        }
    }
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
.height-102{
  height: 100% !important;
  padding: 0px;
}
.bg-green{
    background-color:#00C48D ;
}
.margin-left-0{
    margin-left: 0px !important;
    margin-right: -30px !important;
}
.text-green {
  color: green !important;
}

</style>
