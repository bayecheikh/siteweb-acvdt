<template>
    <div class="support-area pt-60 pb-40" id="faq">
        <div class="container">
            <div class="row justify-content-center custom-row margin-left-0 border-grey width-100" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'service-abonnement')" :key="index">
                <div class="col-lg-12 col-sm-12 mt-0 height-102 custom-col ">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-sm-12 custom-padding-white" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'foire-aux-questions-intro')" :key="index">
                            <h1 class="card-title custom-title">{{item.titre}}</h1>
                            <hr style="width:100px;background-color:#000; height:6px;"> 
                            <div class="accordion mt-4" id="accordionFlushExample">
                                <div class="accordion-item" v-for="(item, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'foire-aux-questions')" :key="index">
                                    <h2 class="accordion-header" :id="'headingOne'+item.id">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseOne'+item.id" aria-expanded="true" :aria-controls="'collapseOne'+item.id">
                                            {{item.titre}}
                                        </button>
                                    </h2>
                                    <div :id="'collapseOne'+item.id" class="accordion-collapse collapse" :aria-labelledby="'headingOne'+item.id" data-bs-parent="#accordionExample">
                                        <div class="accordion-body" v-html="item.body">
                                            
                                        </div>
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
    background-color:#08b708 ;
}
.margin-left-0{
    margin-left: 0px !important;
    margin-right: -30px !important;
}
.width-100{
    width: 100%;
}
.accordion-item {
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-top: 33px !important;
}
.accordion-button:not(.collapsed) {
  color: #0060a8;
  background-color: #f1f4f7;
  box-shadow: unset !important;
}
</style>
