<template>
    <div class="shop-page-wrapper">
        <TheHeader />
        <Breadcrumb pageTitle="Marchés publics" />
        <StatistiqueMarches />
        <MarchesEncours />
        <ServicePolicyThree />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        mounted: function() {
            this.$store.dispatch('contenus/getList')
            this.$store.dispatch('marchepublics/getList')
        },
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            MotDuPresident: () => import('@/components/MotDuPresident'),
            StatistiqueMarches: () => import('@/components/StatistiqueMarches'),
            MarchesEncours: () => import('@/components/MarchesEncours'),
            ServicePolicyThree: () => import('@/components/policy/ServicePolicyThree'),
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
