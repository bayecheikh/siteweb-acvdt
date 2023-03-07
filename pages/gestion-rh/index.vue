<template>
    <div class="shop-page-wrapper">
        <TheHeader />
        <StatistiqueOffres />
        <Breadcrumb pageTitle="CARRIÈRES" />
        <OffreEncours />
        <TableOffres />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        mounted: function() {
            this.$store.dispatch('contenus/getList')
            this.$store.dispatch('gestionrhs/getList')
        },
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            StatistiqueOffres: () => import('@/components/StatistiqueOffres'),
            OffreEncours: () => import('@/components/OffreEncours'),
            TableOffres: () => import('@/components/TableOffres'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter')
        },
        head() {
            return {
                title: "Marchés publics"
            }
        }
    };
</script>
