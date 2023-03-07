<template>
    <div class="support-area pt-60 pb-90 grey-bg">
        <div class="container">
            <div class="row justify-content-center mb-30">
                <div class="col-lg-12 col-sm-12">
                  <h1 class="card-title custom-title">Les marchés en cours</h1>  
                </div>
            </div>
            <div class="row justify-content-center">
                    <swiper :options="marcheCarousel">

                    <swiper-slide v-for="(marche, index) in listmarchepublics" :key="index" class="col-lg-4 col-sm-12 mt-0">
                        <div class="custom-bloc-mp">
                            <div class="custom-bloc-head">
                                <div class="ref_">
                                    <p><B>Réf.</B></p>
                                    <p class="">{{marche.reference}}</p>
                                </div>
                                <div class="del_">
                                    <p><B>Date limite</B></p>
                                    <p>{{marche.date_limite}}</p>
                                </div>
                            </div>
                            <div class="custom-bloc-content">
                                <p><B>Objet</B></p>
                                <p class ="custom-bloc-content-height" v-html="$truncate(marche.objet, 256)"></p>
                            </div>
                            <div class="custom-bloc-bottom d-flex justify-content-between">
                                <button type="button" @click="onClickConsulter(marche)">
                                    <p class="text-center btn ref_btn_">Consulter</p>
                                </button>
                    
                                <n-link to="" class="custom-center-box">
                                    <p class="text-center btn ref_btn_">Télécharger</p>
                                </n-link>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="hero-slider-nav swiper-button-prev custom-nav">
                <i class="pe-7s-angle-left"></i>
                </div>
                <div class="hero-slider-nav swiper-button-next custom-nav">
                    <i class="pe-7s-angle-right"></i>
                </div> 
            </div>
        </div>
        <div v-if="marcheObject">
            <modal :name="'modal_'+marcheObject.id" width="50%" :scrollable="true" height=auto>
            <div class="container pt-15 pb-15">
                <div class="custom-row-2">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="custom-bloc-mp">
                            <div class="custom-bloc-head">
                                <div class="ref_">
                                    <p>Ref</p>
                                    <p >{{ marcheObject.reference }} </p>
                                </div>
                                <div class="del_">
                                    <p>Type de marché</p>
                                    <p>{{marcheObject.type_marche }}</p>
                                </div>
                                <div class="del_">
                                    <p>Catégorie</p>
                                    <p>{{  formatCategorie(marcheObject.categorie) }}</p>
                                </div>
                            
                                <div class="ref_">
                                    <p>Date de publication</p>
                                    <p>{{ marcheObject.date_publication}}</p>
                                </div>
                                <div class="del_">
                                    <p>Date limite de dépot</p>
                                    <p>{{ marcheObject.date_limite }}</p>
                                </div>
                            </div>
                            <div class="custom-bloc-content">
                                <h4>Objet</h4>
                                <hr>
                                <div class="card-text" v-html="marcheObject.objet"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        mounted: function() {
           this.$store.dispatch('marchepublics/getList')
        },
        computed: mapGetters({
            listmarchepublics: 'marchepublics/listmarchepublics',
        }),
        methods: {
            formatCategorie(slug){
                if(slug==="plan_de_passation"){
                    return "Plan de passation"
                }
                if(slug==="avis-d-appel-a-concurence"){
                    return "Avis d'appel à concurrence"
                }
                if(slug==="avis-generaux"){
                    return "Avis généraux"
                }

            },
            async onClickConsulter(marche) {
               this.marcheObject = marche
                this.isPageLoad=true
              await this.$modal.show('modal_'+marche.id)
             
            },
        },
        data() {
            return {
                siteUrl:process.env.siteUrl,
                marcheObject:null,
                marches: [],
                marcheCarousel: {
                    loop: true,
                    speed: 750,
                    spaceBetween: 30,
                    slidesPerView: 5,
                    autoplay: true,
                     navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    // Responsive breakpoints
                    breakpoints: {
                        320: {
                            slidesPerView: 1
                        },
                        480: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 3
                        },
                        1280: {
                            slidesPerView: 3
                        }
                    }
                }
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
.custom-bloc-mp {
    background: #fff;
    margin: 8px;
}
.custom-bloc-head {
    display: flex;
    justify-content: space-between;
}
.ref_ {
    background: #0061A8;;
    width: 100%;
    padding-left: 15px;
    color: #fff;
}
.ref_btn_ {
    width: 100%;
    padding-left: 15px;
    border: solid 1px grey;
}
.del_ {
    background: #0061A8D6;
    width: 100%;
    padding-left: 15px;
    color: #fff;
}
.ref_ p,.del_ p{
    color: #fff;
}
.custom-bloc-content {
    padding: 36px;
    border-bottom: solid 1px #dee2e6;
}
.custom-bloc-bottom {
    padding: 26px;
}
.grey-bg{
    background-color: #dbe3eba1;
}

.custom-bloc-content-height {
  height: 160px; 
  overflow: hidden;
}
</style>
