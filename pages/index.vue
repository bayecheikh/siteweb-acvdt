<template>
    <div class="home-page-wrapper">
        <TheHeader />
        <HeroSlider />
        <ServicePolicy />
        <ServicePolicyTwo />
        <ServicePolicyThree />
        <!-- <ProductWrapper :isSectionTitle=true /> -->
        <BlogWrapper />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            HeroSlider: () => import('@/components/hero/HeroSlider'),
            ServicePolicy: () => import('@/components/policy/ServicePolicy'),
            ServicePolicyTwo: () => import('@/components/policy/ServicePolicyTwo'),
            ServicePolicyThree: () => import('@/components/policy/ServicePolicyThree'),
            ProductWrapper: () => import('@/components/product/ProductWrapper'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        mounted: function() {
            this.$store.dispatch('contenus/getList')
        },
        
        head() {
            return {
                title: 'Sirat'
            }
        },
    };
</script>
<style>
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #0060a8 !important;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
</style>


