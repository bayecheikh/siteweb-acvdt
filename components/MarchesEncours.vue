<template>
    <div class="support-area pt-60 pb-90 grey-bg">
        <div class="container">
            <div class="row justify-content-center mb-30">
                <div class="col-lg-12 col-sm-12">
                  <h1 class="card-title custom-title">Les marchés en cours</h1>  
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-12 mt-0" v-for="(item, index) in marches" :key="index">
                    <!-- <div class="blog-wrap-2 mb-0 height-100">   
                        <div class="card-body">
                            <n-link :to="item.field_page" class="custom-center-box">
                                <img height="100" class="" :src="siteUrl+item.field_icon" alt="image">
                            </n-link>
                            <n-link :to="item.nid" class="custom-center-box">
                                <h2 class="card-title custom-sub-title text-center pt-15">{{item.title}}</h2>
                            </n-link>
                            <n-link :to="item.nid" class="custom-center-box">
                                <p class="card-text pb-10 text-center">{{item.nid}}</p>
                            </n-link> 
                              
                        </div>
                        <n-link :to="`/marches/`+item.nid" class="btn btn-success">
                            Lire la suite
                        </n-link>
                    </div> -->
                    <div class="custom-bloc-mp">
                        <div class="custom-bloc-head">
                            <div class="ref_">
                                <p>Ref</p>
                                <p class="">{{item.field_reference}}</p>
                            </div>
                            <div class="del_">
                                <p>Date limite</p>
                                <p>{{item.field_date_li}}</p>
                            </div>
                        </div>
                        <div class="custom-bloc-content">
                            <p>Objet</p>
                            <p>{{item.field_objet}}</p>
                        </div>
                        <div class="custom-bloc-bottom d-flex justify-content-between">
                            <n-link :to="item.nid" class="custom-center-box">
                                <p class="text-center btn ref_">Consulter</p>
                            </n-link>
                            <n-link :to="'#'" class="custom-center-box">
                                <p class="text-center btn ref_">Message</p>
                            </n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function() {
            this.getListMarche()
        },
        methods: {
            getListMarche(){
                this.progress=true
                this.$axios.$get('/api/marches-publics?_format=json')
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données Reçu ++++++: ', response)
                    this.marches = response

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                });
            }
        },
        data() {
            return {
                siteUrl:process.env.siteUrl,
                marches: []
            }
        },
    };
</script>
<style scoped>
.height-100{
    height: 100% !important;
    box-shadow: 0px -6px 22px 0 #e9ecef;
    padding: 14px;
}
.custom-title{
    font-weight: 600;
    color: #1f8389;
}
.custom-sub-title{
    font-weight: 500;
    color: #1f8389;
    font-size: 20px;
}
.custom-center-box{
    display: flex;
    justify-content: center;
}
.text-center{
    text-align: center;
}
.custom-bloc-mp {
    background: #fff;
    margin: 8px;
}
.custom-bloc-head {
    display: flex;
    justify-content: space-between;
}
.ref_ {
    background: #0D6E77;
    width: 100%;
    padding-left: 15px;
    color: #fff;
}
.del_ {
    background: #0d6e77de;
    width: 100%;
    padding-left: 15px;
    color: #fff;
}
.ref_ p,.del_ p{
    color: #fff;
}
.custom-bloc-content {
    padding: 36px;
    border-bottom: solid 1px #dee2e6;
}
.custom-bloc-bottom {
    padding: 26px;
}
.grey-bg{
    background-color: #dbe3eba1;
}
</style>
