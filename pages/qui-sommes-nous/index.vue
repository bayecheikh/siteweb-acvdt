<template>
    <div class="shop-page-wrapper">
        <TheHeader />
        <Breadcrumb pageTitle="Qui sommes-nous ?" />
        <MotDuPresident />
        <QuiSommesNous />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            MotDuPresident: () => import('@/components/MotDuPresident'),
            QuiSommesNous: () => import('@/components/QuiSommesNous'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter')
        },
        head() {
            return {
                title: "Qui sommes-nous"
            }
        }
    };
</script>
