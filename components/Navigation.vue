<template>
    <ul>
        <li>
            <nuxt-link to="/">Accueil</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/qui-sommes-nous">Qui sommes nous ?<i class="fa fa-angle-down"></i></nuxt-link>
            <ul class="submenu">
                <li><nuxt-link to="/">Decret/Statut</nuxt-link></li>
                <li><nuxt-link to="/">Organigramme</nuxt-link></li>
                <li><nuxt-link to="/">Mission</nuxt-link></li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/">Activités<i class="fa fa-angle-down"></i></nuxt-link>
            <ul class="mega-menu mega-menu-padding">
                <li>
                    <ul>
                        <li class="mega-menu-title">
                            <nuxt-link to="/">Projets</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Portefeuille</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Réalisations</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li class="mega-menu-title">
                            <nuxt-link to="/">Autres activités</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Médiation sociale</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Développement durable</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Appui transversal</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li class="mega-menu-title">
                            <nuxt-link to="">Centre de ressources</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Rapports et autres publications</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Statistiques</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">SIG/Cartographie</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Phototéque</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li class="mega-menu-title">
                            <nuxt-link to="">Veille citoyenne</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Une question, une préocupation</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Je signale une incivilité</nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/">Marché public<i class="fa fa-angle-down"></i></nuxt-link>
            <ul class="mega-menu mega-menu-padding">
                <li>
                    <ul>
                        <li class="mega-menu-title">
                            <nuxt-link to="/">Présentation</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">La déontologie des marchés publics à l'agence</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Marchés attribués</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">PRMP j'ai une question!</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li class="mega-menu-title">
                            <nuxt-link to="/">Comment répondre à une consultation</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Déja inscrit</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Nouvel utilisateur</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Je soumet mon dossier</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li class="mega-menu-title">
                            <nuxt-link to="">Les consultations en cours</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Rechercher une consultation</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Recherche avancée</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li class="mega-menu-title">
                            <nuxt-link to="">Veille citoyenne</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Une question, une préocupation</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Je signale une incivilité</nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <!-- <li>
            <nuxt-link to="/shop"> Shop <i class="fa fa-angle-down"></i></nuxt-link>
            <ul class="mega-menu">
                <li>
                    <ul>
                        <li class="mega-menu-title">
                            <nuxt-link to="">shop layout</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/shop">shop grid standard</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/shop-grid-two-column">shop grid two column</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/shop-grid-no-sidebar">shop grid no sidebar</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/shop-grid-full-width">shop grid full width</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/shop-grid-right-sidebar">shop grid right sidebar</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/shop-list-standard">shop list standard</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/shop-list-full-width">shop list full width</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li class="mega-menu-title">
                            <nuxt-link to="">product details</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/product/crew-ventile-coat-one">product variation</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/product/product-affiliate">product affiliate</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/product/women-winter-overcoat-one">product simple</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li class="mega-menu-img">
                            <nuxt-link to="/shop">
                                <img src="/img/banner/banner-12.png" alt="flone">
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <nuxt-link to="">Pages <i class="fa fa-angle-down"></i></nuxt-link>
            <ul class="submenu">
                <li><nuxt-link to="/cart">Cart</nuxt-link></li>
                <li><nuxt-link to="/checkout">Checkout</nuxt-link></li>
                <li><nuxt-link to="/wishlist">Wishlist</nuxt-link></li>
                <li><nuxt-link to="/compare">Compare</nuxt-link></li>
                <li><nuxt-link to="/about">about us</nuxt-link></li>
                <li><nuxt-link to="/my-account">My Account</nuxt-link></li>
                <li><nuxt-link to="/login-register">Login / Register</nuxt-link></li>
                <li><nuxt-link to="/contact">Contact us</nuxt-link></li>
                <li><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
                <li><nuxt-link to="/terms-conditions">Terms Conditions</nuxt-link></li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/blog">Blog <i class="fa fa-angle-down"></i></nuxt-link>
            <ul class="submenu">
                <li>
                    <nuxt-link to="/blog">blog standard</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog/blog-right-sidebar">blog right sidebar</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog/blog-without-sidebar">blog No sidebar</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog/a-guide-to-latest-trends-product">blog details</nuxt-link>
                </li>
            </ul>
        </li> -->
        <li>
            <nuxt-link to="/contact">Contact </nuxt-link>
        </li>
    </ul>
</template>