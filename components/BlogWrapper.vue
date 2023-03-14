<template>
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
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    import blogData from "@/data/blog.json";

    export default {
        components: {
            BlogItem: () => import('@/components/BlogItem')
        },
        computed: mapGetters({
            listcontenus: 'contenus/listcontenus',
        }),
        data() {
            return {
                siteUrl:process.env.siteUrl,
                fileUrl:process.env.fileUrl,
                missions: [],
                mission_intro:[]
            }
        },

        data() {
            return {
                blogData
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
</style>