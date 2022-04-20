<template>
    <div class="offcanvas-mobile-menu-wrapper">
        <div class="mobile-menu-overlay" @click="$emit('toggleAsideMenu')"></div>
        <div class="mobile-menu-inner">
            <button class="close-btn" @click="$emit('toggleAsideMenu')">
                <i class="pe-7s-close"></i>
            </button>
            <div class="mobile-menu-inner-wrapper">
                <div class="offcanvas-mobile-search">
                <form class="mobile-search-inner">
                    <input type="text" placeholder="Search here">
                    <button type="submit"><i class="pe-7s-search"></i></button>
                </form>
            </div>
            <div class="offcanvas-body-inner">
                <div class="menu-navigation">
                    <ResponsiveMobileMenu />
                </div>
                
                <div class="offcanvas-widget-area">
                    <ul>
                        <li>
                            <i class="fa fa-phone"></i>
                            <a href="callto:+221770000000">+221770000000</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:info@agencecadredevie.com">info@agencecadredevie.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ResponsiveMobileMenu: () => import('@/components/ResponsiveMobileMenu'),
        },
    };
</script>