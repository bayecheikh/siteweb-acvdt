<template>
    <ul>
        <li v-for='(link, i) in menus' :key='i'>
            <nuxt-link :to="link.url">{{ link.title }}<i :class="link.submenu && 'fa fa-angle-down'"></i></nuxt-link>
            <ul class="mega-menu mega-menu-padding row" v-if="link.submenu">
                <li v-for='(link, i) in link.submenu' :key='i' >
                    <nuxt-link :to="link.url" v-if="!link.submenu">{{ link.title }}<i :class="link.submenu && 'fa fa-angle-down'"></i></nuxt-link>
                    <ul v-if="link.submenu">
                        <li class="mega-menu-title">
                            <nuxt-link :to="link.url">{{ link.title }}</nuxt-link>
                        </li>
                        <li v-for='(link, i) in link.submenu' :key='i'>
                            <nuxt-link :to="link.url">{{ link.title }}</nuxt-link>
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
        
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                menus: [
                    {
                        url: '/',
                        title: 'Accueil'
                    },
                    {
                        url: '/qui-sommes-nous',
                        title: 'Qui sommes nous ?',
                        submenu: [
                            {
                                url: '/qui-sommes-nous/decret-statut',
                                title: 'Decret/Statut',
                            },
                            {
                                url: '/qui-sommes-nous/organnigramme',
                                title: 'Organigramme',
                            },
                            {
                                url: '/qui-sommes-nous/mission',
                                title: 'Mission',
                            }
                        ]
                    },
                    {
                        url: '/activites',
                        title: 'Activités',
                        submenu: [
                            {
                                url: '/',
                                title: 'Projets',
                                submenu: [
                                    {
                                        url: '/',
                                        title: 'Portefeuille',

                                    },
                                    {
                                        url: '/',
                                        title: 'Réalisations',
                                    }
                                ]

                            },
                            {
                                url: '/',
                                title: 'Autres activités',
                                submenu: [
                                    {
                                        url: '/',
                                        title: 'Médiation sociale',

                                    },
                                    {
                                        url: '/',
                                        title: 'Développement durable',
                                    },
                                    {
                                        url: '/',
                                        title: 'Appui transversal',
                                    }
                                ]
                            },
                            {
                                url: '/',
                                title: 'Centre de ressources',
                                submenu: [
                                    {
                                        url: '/',
                                        title: 'Rapports et autres publications',

                                    },
                                    {
                                        url: '/',
                                        title: 'Statistiques',
                                    },
                                    {
                                        url: '/',
                                        title: 'SIG/Cartographie',
                                    },
                                    {
                                        url: '/',
                                        title: 'Phototéque',
                                    }
                                ]
                            },
                            {
                                url: '/',
                                title: 'Veille citoyenne',
                                submenu: [
                                    {
                                        url: '/',
                                        title: 'Une question, une préocupation',

                                    },
                                    {
                                        url: '/',
                                        title: 'Je signale une incivilité',
                                    }
                                ]
                            }
                        ],
                        mega:true
                    },
                    {
                        url: '/marches-publics',
                        title: 'Marché public',
                        submenu: [
                            {
                                url: '/',
                                title: 'Présentation',
                                submenu: [
                                    {
                                        url: '/',
                                        title: 'La déontologie des marchés publics à l\'agence',

                                    },
                                    {
                                        url: '/',
                                        title: 'Marchés attribués',
                                    },
                                    {
                                        url: '/',
                                        title: 'PRMP j\'ai une question!',
                                    }
                                ]

                            },
                            {
                                url: '/',
                                title: 'Comment répondre à une consultation',
                                submenu: [
                                    {
                                        url: '/',
                                        title: 'Déja inscrit',

                                    },
                                    {
                                        url: '/',
                                        title: 'Nouvel utilisateur',
                                    },
                                    {
                                        url: '/',
                                        title: 'Je soumet mon dossier',
                                    }
                                ]
                            },
                            {
                                url: '/',
                                title: 'Les consultations en cours',
                                submenu: [
                                    {
                                        url: '/',
                                        title: 'Rechercher une consultation',

                                    },
                                    {
                                        url: '/',
                                        title: 'Recherche avancée',
                                    }
                                ]
                            }
                        ],
                        mega:true
                    },
                    {
                        url: '/contact',
                        title: 'Contact',
                    }
                ]
            }
        },
        mounted() {
            let getSiblings = function (e) {
                let siblings = []; 
                if(!e.parentNode) {
                    return siblings;
                }
                let sibling  = e.parentNode.firstChild;
                while (sibling) {
                    if (sibling.nodeType === 1 && sibling !== e) {
                        siblings.push(sibling);
                    }
                    sibling = sibling.nextSibling;
                }
                return siblings;
            };

            const subMenuToggle = document.querySelectorAll('.submenu-toggle');
            subMenuToggle.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    if(!this.classList.contains('active')) {
                        this.classList.add('active')
                        this.nextElementSibling.classList.add('active')
                        this.closest('li').classList.add('active')
                        getSiblings(this.closest('li')).forEach(function(item) {
                            item.classList.remove('active')
                            item.querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                                child.classList.remove('active')
                            })
                        })
                    } else {
                        this.closest('li').classList.remove('active')
                        this.closest('li').querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                            child.classList.remove('active')
                        })
                    }
                })
            })
        }
    }
</script>
<style scoped>
.main-menu nav ul li ul.mega-menu {
  margin-left: -100%;
}
</style>