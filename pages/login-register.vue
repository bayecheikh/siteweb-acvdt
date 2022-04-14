<template>
    <div class="shop-page-wrapper">
        <TheHeader />
        <Breadcrumb pageTitle="Se connecter - S'inscrire" />
        
        <div class="login-register-area pt-100 pb-100">
            <div class="container">
                <div class="login-register-tab-list nav">
                    <button @click="comA('Login')" :class="{ active: isActive === 'Login' }" >
                        Se connecter
                    </button>
                    <button @click="comA('Register')" :class="{ active: isActive === 'Register' }" >
                        S'inscrire
                    </button>
                </div>
                <div class="row">
                    <div class="col-lg-7 col-12 ms-auto me-auto">
                        <component :is="isActive" />
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
    import TheHeader from "@/components/TheHeader";
    import Login from "@/components/Login";
    import Register from "@/components/Register";
    import Breadcrumb from "@/components/Breadcrumb";
    import TheFooter from "@/components/TheFooter";
    export default {
        components: {
            TheHeader,
            Login,
            Register,
            Breadcrumb,
            TheFooter
        },

        data() {
            return {
                isActive: "Login",
            };
        },

        methods: {
            comA(item) {
                this.isActive = item;
            }
        },
        head() {
            return {
                title: "Login / Register"
            }
        }
    };
</script>
