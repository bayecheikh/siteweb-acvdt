<template>
    <div class="slider-area nav-style-1">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,i) in listcontenus.filter(contenu => contenu.categories[0].slug === 'slider-accueil')" :key="i" class="single-slider slider-height-1 bg-green bg-slide-1" :style="{'background-image':'url('+(fileUrl+(item.futured_images[0] && item.futured_images[0].name))+')'}">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="slider-content slider-animation-1">
                                <p class="custom-title-slider">{{item.titre}}</p>
                                <hr class="custom-hr">
                                <p class="custom-text-slider" v-html="item.resume">
                                </p>
                                <div class="slider-btn btn-hover">
                                    <n-link :to="item.id">EN SAVOIR</n-link>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="col-sm-6">
                            <div class="slider-single-img slider-img-animation">
                                <img src="/img/slider/single-slide-1.png" alt="image">
                            </div>
                        </div> -->
                    </div>
                </div>
            </swiper-slide>
           
            <!-- Swiper Navigation Start -->
            <div class="hero-slider-nav swiper-button-prev custom-nav">
                <i class="pe-7s-angle-left"></i>
            </div>
            <div class="hero-slider-nav swiper-button-next custom-nav">
                <i class="pe-7s-angle-right"></i>
            </div>
            <!-- Swiper Navigation End -->
        </swiper>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        computed: mapGetters({
            listcontenus: 'contenus/listcontenus',
        }),
        methods: {
        },
        data() {
            return {
                fileUrl:process.env.fileUrl,
                sliders:[],
                swiperOption: {
                    loop: true,
                    speed: 750,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    autoplay: {
                        delay: 10000
                    },
                    effect: "fade",
                    fadeEffect: { 
                        crossFade: true 
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                }
            }
        },
    };
</script>
<style scoped>
.custom-title-slider{
    font-weight: 600;  
    text-align: left;
    line-height: 45px;
    font-size: 30px;
    color: rgb(255, 255, 255);
    transform: translate3d(0px, 0px, 0px);
    transform-origin: 50% 50% 0px;
}
.custom-text-slider{
    color: rgb(255, 255, 255) !important;
}

.bg-slide-1 {
  background-color: #0060a8;;
  
  background-size: cover;
  background-repeat: no-repeat;
}
.custom-hr{ 
    height: 5px; 
    background-color: rgb(255, 255, 255); 
    width: 300px; transition: none 0s ease 0s; 
    text-align: left; 
    line-height: 60px; 
    border-width: 1px 0px 0px; 
    padding: 0px; 
    letter-spacing: 0px; 
    font-weight: 600; 
    font-size: 14px;
}
.slider-btn a {
  font-size: 16px;
  color: #F4BD19;
  display: inline-block;
  border: 2px solid #F4BD19;
  text-transform: uppercase;
  line-height: 1;
  padding: 19px 50px 21px;
}
.slider-btn a:hover {
  background-color: #fff;
}
.btn-hover a::after, .btn-hover button::after {
  width: 0;
  left: auto;
  right: 0;
  background: #fff;
}
.custom-nav{
    color:#fff !important
}
</style>