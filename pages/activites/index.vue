<template>
    <div class="shop-page-wrapper">
        <TheHeader />
        <Breadcrumb pageTitle="Activités" />
        <Activites />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        mounted: function() {
            this.$store.dispatch('contenus/getList')
        },
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            Activites: () => import('@/components/Activites'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter')
        },
        head() {
            return {
                title: "Activites"
            }
        }
    };
</script>
