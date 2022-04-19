<template>
    <div class="blog-page-wrapper">
        <TheHeader />
        <Breadcrumb pageTitle="Missions" />
        <ServicePolicy />
        <TheFooter />
    </div>
</template>

<script>
    import blogData from "@/data/blog.json";
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            ServicePolicy: () => import('@/components/policy/ServicePolicy'),
            TheFooter: () => import("@/components/TheFooter")
        },
        data() {
            return {
                blogData,
                currentPage: 1,
                perPage: 6
            }
        },
        computed: {
            getItems() {
                let start = (this.currentPage - 1) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.blogData.slice(start, end);
            },
            getPaginateCount() {
                return Math.ceil(this.blogData.length / this.perPage);
            },
        },
        methods: {
            paginateClickCallback(page) {
                this.currentPage = Number(page);
            },
        },
        head() {
            return {
                title: "Blog Standard"
            }
        }
    };
</script>
