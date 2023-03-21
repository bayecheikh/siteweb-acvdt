<template>
     <div>
        <spinner class="square-loader" :width="'1290px'" :height="'454.9px'" :margin="'0px'" :marginBottom="'50px'"     v-if="!showContent" ></spinner>


    <div v-if="showContent">
    <div class="blog-area pb-55">
        <div class="container">
            <div class="row justify-content-center mb-30">
                <div class="col-lg-12 col-sm-12">
                  <h1 class="card-title custom-title">Actualités</h1> 
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6" v-for="(blog, index) in listcontenus.filter(contenu => contenu.categories[0].slug === 'actualites')" :key="index">
                    
                    <BlogItem :blog="blog" />
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
    import blogData from "@/data/blog.json";

    export default {

     
        components: {
            Spinner,
            BlogItem: () => import('@/components/BlogItem')
        },
        computed: mapGetters({
            listcontenus: 'contenus/listcontenus',
        }),
        mounted() {
    this.$store.dispatch("contenus/getList").then(() => {
        this.showContent = true;
    });
  },
        data() {
            return {
                blogData,
                showContent: false,
                siteUrl:process.env.siteUrl,
                fileUrl:process.env.fileUrl,
                missions: [],
                mission_intro:[]
            }
        },

       
    };
</script>
<style>
.custom-title h2{
    font-weight: 600;
    font-size: 26px !important;
    color: #0060a8;
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
