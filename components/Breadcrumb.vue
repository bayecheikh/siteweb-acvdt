<template>
    <div class="breadcrumb-area pt-70 pb-70 bg-gray-3">
        <div class="container">
            <div class="breadcrumb-content text-center">
                <ul>
                    <li>
                        <n-link to="/">Accueil</n-link>
                    </li>
                    <li class="active">{{ pageTitle }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["pageTitle"]
    };
</script>
<style scoped>
.breadcrumb-area{
    background-image: url("/img/slider/bg-slider-1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.breadcrumb-content ul li {
  color: #fff;
}
.breadcrumb-content ul li a{
  color: #fff;
}
</style>