<template>
    <div class="support-area pt-30 pb-40">
        <div class="container">
            <div class="row justify-content-center mb-30">
                <div class="col-lg-12 col-sm-12">
                  <h1 class="card-title custom-title">Marchés publics</h1> 
                </div>
            </div>
            <div class="row justify-content-center mb-30 blog-wrap-2 mb-0 height-100">
                <div class="col-lg-12 col-sm-12">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
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
                                        <th scope="col">Autorité contractante</th>
                                        <th scope="col">Publié</th>
                                        <th scope="col">Date limite</th>
                                        <th scope="col">Détail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">#SIRAT/BJ_12</th>
                                            <td>Lorum Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit sagittis mi, eu tincidunt mauris placerat a.</td>
                                            <td>Société des infrastructures routières et de l'aménagement du territoire</td>
                                            <td>12-12-2022</td>
                                            <td>12-04-2023</td>
                                            <td><button type="button" class="btn btn-outline-secondary">Consulter</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">#SIRAT/BJ_13</th>
                                            <td>Lorum Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit sagittis mi, eu tincidunt mauris placerat a.</td>
                                            <td>Société des infrastructures routières et de l'aménagement du territoire</td>
                                            <td>12-12-2022</td>
                                            <td>12-04-2023</td>
                                            <td><button type="button" class="btn btn-outline-secondary">Consulter</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">#SIRAT/BJ_14</th>
                                            <td>Lorum Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit sagittis mi, eu tincidunt mauris placerat a.</td>
                                            <td>Société des infrastructures routières et de l'aménagement du territoire</td>
                                            <td>12-12-2022</td>
                                            <td>12-04-2023</td>
                                            <td><button type="button" class="btn btn-outline-secondary">Consulter</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">#SIRAT/BJ_15</th>
                                            <td>Lorum Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit sagittis mi, eu tincidunt mauris placerat a.</td>
                                            <td>Société des infrastructures routières et de l'aménagement du territoire</td>
                                            <td>12-12-2022</td>
                                            <td>12-04-2023</td>
                                            <td><button type="button" class="btn btn-outline-secondary">Consulter</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
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
            listcontenus: 'contenus/listcontenus',
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
