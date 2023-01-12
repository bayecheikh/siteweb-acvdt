<template>
    <div class="blog-wrap mb-25">
        <div class="blog-img">
            <n-link :to="`#`">
                <img :src="fileUrl+(blog.futured_images[0] && blog.futured_images[0].name)" :alt="blog.title">
            </n-link>
            <!--<n-link :to="`/blog/${slugify(blog.titre)}`">
                <img :src="fileUrl+(blog.futured_images[0] && blog.futured_images[0].name)" :alt="blog.title">
            </n-link>-->
            <!--<span>{{ blog.category[0]}}</span>-->
        </div>
        <div class="blog-content-wrap">
            <div class="blog-content text-center">
                <h4>
                    <n-link :to="`#`">{{truncate(blog.titre,60)  }}</n-link>
                    <!--<n-link :to="`/blog/${slugify(blog.titre)}`">{{ blog.titre }}</n-link>-->
                </h4>
                <!--<span>Par <n-link to="">{{ blog.author }}</n-link></span>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["blog"],
        data() {
            return {
                siteUrl:process.env.siteUrl,
                fileUrl:process.env.fileUrl,
                missions: [],
                mission_intro:[]
            }
        },
        methods: {
            slugify(text) {
                return text
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-") // Replace spaces with -
                    .replace(/[^\w-]+/g, "") // Remove all non-word chars
                    .replace(/--+/g, "-") // Replace multiple - with single -
                    .replace(/^-+/, "") // Trim - from start of text
                    .replace(/-+$/, ""); // Trim - from end of text
            },
            truncate(source, size) {
                return source.length > size ? source.slice(0, size - 1) + "…" : source;
            }
        },
    };
</script>
<style>
.custom-title{
    font-weight: 600;
    font-size: 26px !important;
    color: #0060a8;
}
</style>