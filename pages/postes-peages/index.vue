<template>
    <div class="home-page-wrapper bg-grey">
        <TheHeader />
        <Breadcrumb pageTitle="Postes de péages" />
        <!--<MotDuPresident />-->
        <IntroPostePeage />
        <FinancementParRegion />
        <InfoUtiles />
        <TarifPenalites />
        <ServiceAbonnement />
        <Faq />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        mounted: function() {
            this.$store.dispatch('contenus/getList')
        },
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            FinancementParRegion : () => import('@/components/sections/FinancementParRegion'),
            IntroPostePeage : () => import('@/components/IntroPostePeage'),
            InfoUtiles : () => import('@/components/InfoUtiles'),
            TarifPenalites : () => import('@/components/TarifPenalites'),
            ServiceAbonnement : () => import('@/components/ServiceAbonnement'),
            Faq : () => import('@/components/Faq'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        
        head() {
            return {
                title: 'Postes de péages'
            }
        },
    };
</script>


