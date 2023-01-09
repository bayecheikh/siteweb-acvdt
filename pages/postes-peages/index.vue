<template>
    <div class="home-page-wrapper bg-grey">
        <TheHeader />
        <Breadcrumb pageTitle="Qui sommes-nous ?" />
        <!--<MotDuPresident />-->
        <FinancementParRegion />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            FinancementParRegion : () => import('@/components/sections/FinancementParRegion2'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'FVC-SENEGAL'
            }
        },
    };
</script>


