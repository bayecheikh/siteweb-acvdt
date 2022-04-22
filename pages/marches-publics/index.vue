<template>
    <div class="shop-page-wrapper">
        <TheHeader />
        <Breadcrumb pageTitle="Qui sommes-nous ?" />
        <StatistiqueMarches />
        <MarchesEncours />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            MotDuPresident: () => import('@/components/MotDuPresident'),
            StatistiqueMarches: () => import('@/components/StatistiqueMarches'),
            MarchesEncours: () => import('@/components/MarchesEncours'),
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
