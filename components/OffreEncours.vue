<template>
      <div>
        
        <spinner class="square-loader" :width="'1290px'" :height="'500px'" :margin="'0px'"  :marginTop="'30px'"   v-if="!showContent" ></spinner>

        <spinner class="square-loader" :width="'1290px'" :height="'500px'" :margin="'0px'" :marginBottom="'30px'" :marginTop="'30px'"   v-if="!showContent" ></spinner>
    <div v-if="showContent">
    <div class="support-area pt-60 pb-90 grey-bg">
        <div class="container">
            <div class="row justify-content-center mb-30">
                <div class="col-lg-12 col-sm-12">
                  <h1 class="card-title custom-title">Dernières offres d'emploi</h1>  
                </div>
            </div>
            <div class="row justify-content-center">
                <swiper :options="offreCarousel">

                    <swiper-slide v-for="(offre, index) in listemplois" :key="index" class="col-lg-4 col-sm-12 mt-0">
                        <div class="custom-bloc-mp">
                            <div class="custom-bloc-head">
                                <div class="ref_">
                                    <p><B>Réf.</B></p>
                                    <p class="">{{offre.reference}}</p>
                                </div>
                                <div class="del_">
                                    <p><B>Date limite</B></p>
                                    <p>{{offre.date_limite}}</p>
                                </div>
                            </div>
                            <div class="custom-bloc-content">
                                <p><B>Objet</B></p>
                                <p v-html="$truncate(offre.objet, 256)"></p>
                            </div>
                            <div class="custom-bloc-bottom d-flex justify-content-between">
                                <button type="button" @click="onClickConsulter(offre)">
                                    <p class="text-center btn ref_btn_">Consulter</p>
                                </button>
                    
                                <a :href=offre.lien target="_blank" class="custom-center-box">
                                    <p class="text-center btn ref_btn_">Télécharger</p>
                                </a>
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
            <div class="row justify-content-center mb-30 mt-40">
                <div class="col-lg-12 col-sm-12">
                  <h1 class="card-title custom-title">Dernières offres de stage</h1>  
                </div>
            </div>
            <div class="row justify-content-center">
                <swiper :options="offreCarousel">

                    <swiper-slide v-for="(offre, index) in liststages" :key="index" class="col-lg-4 col-sm-12 mt-0">
                        <div class="custom-bloc-mp">
                            <div class="custom-bloc-head">
                                <div class="ref_">
                                    <p><B>Réf.</B></p>
                                    <p class="">{{offre.reference}}</p>
                                </div>
                                <div class="del_">
                                    <p><B>Date limite</B></p>
                                    <p>{{offre.date_limite}}</p>
                                </div>
                            </div>
                            <div class="custom-bloc-content">
                                <p><B>Objet</B></p>
                                <p v-html="$truncate(offre.objet, 256)"></p>
                            </div>
                            <div class="custom-bloc-bottom d-flex justify-content-between">
                                <button type="button" @click="onClickConsulter(offre)">
                                    <p class="text-center btn ref_btn_">Consulter</p></button>
                                
                                <a :href=offre.lien target="_blank" class="custom-center-box">
                                    <p class="text-center btn ref_btn_">Télécharger</p>
                                </a>

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
        <div v-if="offreObject">
            <modal :name="'modalOffreEnCours_'+offreObject.id" width="50%" :scrollable="true" height=auto>
            <div class="container pt-15 pb-15">
                <div class="custom-row-2">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="custom-bloc-mp">
                            <div class="custom-bloc-head">
                                <div class="ref_">
                                    <p>Réf.</p>
                                    <p >{{ offreObject.reference }} </p>
                                </div>
                                <div class="del_">
                                    <p>Secteur</p>
                                    <p>{{ offreObject.secteur }}</p>
                                </div>
                                <div class="ref_">
                                    <p>Date de publication</p>
                                    <p>{{ offreObject.date_publication}}</p>
                                </div>
                                <div class="del_">
                                    <p>Date limite de dépôt</p>
                                    <p>{{ offreObject.date_limite }}</p>
                                </div>
                            </div>
                            <div class="custom-bloc-content">
                                <h4>Objet</h4>
                                <hr>
                                <div class="card-text" v-html="offreObject.objet"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import Spinner from 'vue-spinner/src/SquareLoader.vue';
import { mapGetters } from 'vuex'
    export default {
        components: {
            Spinner,
        },
        mounted() {
    this.$store.dispatch("gestionrhs/getList").then(() => {
        setTimeout(() => {
      this.showContent = true;
    }, 2000); 
    });
  },
        computed: mapGetters({
            listoffres: 'gestionrhs/listgestionrhs',
            listemplois: 'gestionrhs/listemplois',
            liststages: 'gestionrhs/liststages'
        }),
        methods: {
            async onClickConsulter(offre) {
               this.offreObject = offre
                this.isPageLoad=true
              await this.$modal.show('modalOffreEnCours_'+offre.id)
             
            },
        },
        data() {
            return {
                showContent: false,
                offreObject:null,
                isPageLoad: false,
                siteUrl:process.env.siteUrl,
                offreCarousel: {
                    loop: false,
                    speed: 750,
                    spaceBetween: 30,
                    slidesPerView: 5,
                    autoplay: false,
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
.custom-bloc-mp {
    background: #fff;
    margin: 8px;
}
.custom-bloc-head {
    display: flex;
    justify-content: space-between;
}
.ref_ {
    background: #08b708;
    width: 100%;
    padding-left: 15px;
    color: #fff;
}
.del_ {
    background: #08b708de;
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


