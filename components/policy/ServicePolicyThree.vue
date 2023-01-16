<template>
    <div class="support-area pt-30 pb-40">
        <div class="container">
            <div class="row justify-content-center mb-30">
                <div class="col-lg-12 col-sm-12">
                  <h1 class="card-title custom-title">Marchés publics</h1> 
                </div>
            </div>
            <div class="row justify-content-center mb-30 blog-wrap-2 mb-0 height-100 border-grey">
                <div class="col-lg-12 col-sm-12">
                    <ul class="nav nav-pills nav-fill" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Plan de passation</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Avis généraux</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Avis d'appel à concurence</button>
                        </li>
                    </ul>
                    <div class="tab-content mt-4" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <caption>
                                        
                                    </caption>
                                    <thead>
                                        <tr>
                                        <th scope="col">Référence</th>
                                        <th scope="col">Objet</th>
                                        <th scope="col">Type de marché</th>
                                        <th scope="col">Publié</th>
                                        <th scope="col">Date limite</th>
                                        <th scope="col">Détail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in listmarchepublics.filter(marchepublic => marchepublic.categories[0].slug === 'plan-de-passation')" :key="index">
                                            <th scope="row">{{ item.reference }}</th>
                                            <td><div class="card-text" v-html="item.objet"></div></td>
                                            <td>{{ item.type_marche }}</td>
                                            <td>{{ item.date_publication}}</td>
                                            <td>{{ item.date_limite }}</td>
                                            <td><button type="button" class="btn btn-outline-secondary">Consulter</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <caption>
                                        
                                    </caption>
                                    <thead>
                                        <tr>
                                        <th scope="col">Référence</th>
                                        <th scope="col">Objet</th>
                                        <th scope="col">Type de marché</th>
                                        <th scope="col">Publié</th>
                                        <th scope="col">Date limite</th>
                                        <th scope="col">Détail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in listmarchepublics.filter(marchepublic => marchepublic.categories[0].slug === 'avis-generaux')" :key="index">
                                            <th scope="row">{{ item.reference }}</th>
                                            <td><div class="card-text" v-html="item.objet"></div></td>
                                            <td>{{ item.type_marche }}</td>
                                            <td>{{ item.date_publication}}</td>
                                            <td>{{ item.date_limite }}</td>
                                            <td><button type="button" class="btn btn-outline-secondary">Consulter</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <caption>
                                        
                                    </caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">Référence</th>
                                            <th scope="col">Objet</th>
                                            <th scope="col">Type de marché</th>
                                            <th scope="col">Publié</th>
                                            <th scope="col">Date limite</th>
                                            <th scope="col">Détail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in listmarchepublics.filter(marchepublic => marchepublic.categories[0].slug === 'avis-d-appel-a-concurence')" :key="index">
                                            <th scope="row">{{ item.reference }}</th>
                                            <td><div class="card-text" v-html="item.objet"></div></td>
                                            <td>{{ item.type_marche }}</td>
                                            <td>{{ item.date_publication}}</td>
                                            <td>{{ item.date_limite }}</td>
                                            <td><button type="button" class="btn btn-outline-secondary">Consulter</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        computed: mapGetters({
            listmarchepublics: 'marchepublics/listmarchepublics',
        }),
        methods: {
            getUrlImage(url){
                return url.substring(str.indexOf('drupal-api') + 1);
            },
            
        },
        data() {
            return {
                siteUrl:process.env.siteUrl,
                fileUrl:process.env.fileUrl,
                missions: [],
                mission_intro:[]
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
    font-size: 26px !important;
    color: #0060a8;
}
.custom-sub-title{
    font-weight: 500;
    color: #0060a8;
    font-size: 16px !important;
}
</style>
