<template>
     <div>
        <spinner class="square-loader" :width="'1290px'" :height="'550px'" :margin="'0px'"   v-if="!showContent" ></spinner>


    <div v-if="showContent">
    <div class="support-area pt-30 pb-40">
        <div class="container">
            <div class="row justify-content-center mb-30">
                <div class="col-lg-12 col-sm-12">
                  <h1 class="card-title custom-title">Marchés publics</h1> 
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="row justify-content-center custom-input mb-30 blog-wrap-2 mb-0 height-100 border-grey">
                    <input type="text" v-model="input" placeholder="Rechercher par référence, objet..." />
                </div>
                <div class="custom-select row justify-content-center mb-30 blog-wrap-2 mb-0 height-100 border-grey  input-group mb-3">
                    <select v-model="selectedAnnee" @change="filterByAnnee" class="custom-select centered" id="inputGroupSelect02">
                        <option value="">   Filtrer par année...</option>
                        <option v-for="annee in annees" :key="annee.id" :value="annee.libelle">{{ annee.libelle }}</option>
                    </select>
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
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Avis d'appel à concurrence</button>
                        </li>
                    </ul>
                    <div class="tab-content mt-4" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                 
                            <div class="table-responsive">
                                
                                <table class="table">
                                    <thead class="thead-ligth">
                                        <tr>
                                        <th scope="col">Référence</th>
                                        <th scope="col">Objet</th>
                                        <th scope="col">Type de marché</th>
                                        <th scope="col">Publié</th>
                                        <th scope="col">Date limite</th>
                                        <th scope="col">Détail</th>
                                        </tr>
                                    </thead>
                                    <tbody class="tbodyDiv">
                                        <tr class="custom_margin" v-for="(item, index) in  combinedFilteredList().filter(marchepublic => marchepublic.categories[0].slug === 'plan-de-passation')" :key="index">
                                            <th scope="row">{{ item.reference }}</th>
                                            <td><div class="card-text" v-html="item.objet"></div></td>
                                            <td>{{ item.type_marche }}</td>
                                            <td>{{ item.date_publication}}</td>
                                            <td>{{ item.date_limite }}</td>
                                            <td>
                                                <button type="button" class="btn btn_consulter" @click="onClickConsulter('modal_'+item.id)">
                                                    Consulter</button>
                                                <modal :name="'modal_'+item.id" width="50%" :scrollable="true" height=auto>
                                                    <div class="container pt-15 pb-15" v-if="isPageLoad">
                                                        <div class="custom-row-2">
                                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                                <div class="custom-bloc-mp">
                                                                    <div class="custom-bloc-head">
                                                                        <div class="ref_">
                                                                            <p>Réf.</p>
                                                                            <p class="">{{ item.reference }}</p>
                                                                        </div>
                                                                        <div class="del_">
                                                                            <p>Type de marché</p>
                                                                            <p>{{ item.type_marche }}</p>
                                                                        </div>
                                                                        <div class="ref_">
                                                                            <p>Date de publication</p>
                                                                            <p>{{ item.date_publication}}</p>
                                                                        </div>
                                                                        <div class="del_">
                                                                            <p>Date limite de dépôt</p>
                                                                            <p>{{ item.date_limite }}</p>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    <div class="custom-bloc-content">
                                                                        <h4>Objet</h4>
                                                                        <hr>
                                                                        <div class="card-text" v-html="$truncate(item.objet, 256)"></div>
                                                                    </div>
                                                                    <div class="custom-bloc-bottom d-flex justify-content-between">
                                                                        <a target="_blank" :href="item.lien" class="custom-center-box">
                                                                            <p class="text-center btn ref_">Télécharger</p>
                                                                        </a>          
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </modal>
                                            </td>
                                        </tr>
                                        <div v-if="!combinedFilteredList().length">
                                            <p>Aucun résultat</p>
                                        </div>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="table-responsive">
                                <table class="table">
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
                                        <tr v-for="(item, index) in  combinedFilteredList().filter(marchepublic => marchepublic.categories[0].slug === 'avis-generaux')" :key="index">
                                            <th scope="row">{{ item.reference }}</th>
                                            <td><div class="card-text" v-html="item.objet"></div></td>
                                            <td>{{ item.type_marche }}</td>
                                            <td>{{ item.date_publication}}</td>
                                            <td>{{ item.date_limite }}</td>
                                            <td>
                                                <button type="button" class="btn btn_consulter" @click="onClickConsulter('modal_'+item.id)">
                                                    Consulter</button>
                                                <modal :name="'modal_'+item.id" width="50%" :scrollable="true" height=auto>
                                                    <div class="container pt-15 pb-15" v-if="isPageLoad">
                                                        <div class="custom-row-2">
                                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                                <div class="custom-bloc-mp">
                                                                    <div class="custom-bloc-head">
                                                                        <div class="ref_">
                                                                            <p>Réf.</p>
                                                                            <p class="">{{ item.reference }}</p>
                                                                        </div>
                                                                        <div class="del_">
                                                                            <p>Type de marché</p>
                                                                            <p>{{ item.type_marche }}</p>
                                                                        </div>
                                                                        <div class="ref_">
                                                                            <p>Date de publication</p>
                                                                            <p>{{ item.date_publication}}</p>
                                                                        </div>
                                                                        <div class="del_">
                                                                            <p>Date limite de dépôt</p>
                                                                            <p>{{ item.date_limite }}</p>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    <div class="custom-bloc-content">
                                                                        <h4>Objet</h4>
                                                                        <hr>
                                                                        <div class="card-text" v-html="item.objet"></div>
                                                                    </div>
                                                                    <div class="custom-bloc-bottom d-flex justify-content-between">
                                                                        <a target="_blank" :href="item.lien" class="custom-center-box">
                                                                            <p class="text-center btn ref_">Télécharger</p>
                                                                        </a>          
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </modal>
                                            </td>
                                        </tr>
                                        <div v-if="!combinedFilteredList().length">
                                            <p>Aucun résultat</p>
                                        </div>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div class="table-responsive">
                                <table class="table">
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
                                        <tr v-for="(item, index) in  combinedFilteredList().filter(marchepublic => marchepublic.categories[0].slug === 'avis-d-appel-a-concurence')" :key="index">
                                            <th scope="row">{{ item.reference }}</th>
                                            <td><div class="card-text" v-html="$truncate(item.objet,200)"></div></td>
                                            <td>{{ item.type_marche }}</td>
                                            <td>{{ item.date_publication}}</td>
                                            <td>{{ item.date_limite }}</td>
                                            <td>
                                                <button type="button" class="btn btn_consulter" @click="onClickConsulter('modal_'+item.id)">
                                                    Consulter</button>
                                                <modal :name="'modal_'+item.id" width="50%" :scrollable="true" height=auto>
                                                    <div class="container pt-15 pb-15" v-if="isPageLoad">
                                                        <div class="custom-row-2">
                                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                                <div class="custom-bloc-mp">
                                                                    <div class="custom-bloc-head">
                                                                        <div class="ref_">
                                                                            <p>Réf.</p>
                                                                            <p class="">{{ item.reference }}</p>
                                                                        </div>
                                                                        <div class="del_">
                                                                            <p>Type de marché</p>
                                                                            <p>{{ item.type_marche }}</p>
                                                                        </div>
                                                                        <div class="ref_">
                                                                            <p>Date de publication</p>
                                                                            <p>{{ item.date_publication}}</p>
                                                                        </div>
                                                                        <div class="del_">
                                                                            <p>Date limite de dépôt</p>
                                                                            <p>{{ item.date_limite }}</p>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    <div class="custom-bloc-content">
                                                                        <h4>Objet</h4>
                                                                        <hr>
                                                                        <div class="card-text" v-html="item.objet"></div>
                                                                    </div>
                                                                    <div class="custom-bloc-bottom d-flex justify-content-between">
                                                                        <a target="_blank" :href="item.lien" class="custom-center-box">
                                                                            <p class="text-center btn ref_">Télécharger</p>
                                                                        </a>          
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </modal>
                                            </td>                              
                                        </tr>
                                        <div v-if="!combinedFilteredList().length">
                                            <p>Aucun résultat</p>
                                        </div>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
</template>

<script>
import Spinner from 'vue-spinner/src/SquareLoader.vue';
import { mapMutations, mapGetters } from 'vuex'
    export default {
        components: {
            Spinner,
        },
        computed: mapGetters({
            listmarchepublics: 'marchepublics/listmarchepublics',
        }),
        mounted() {
    this.$store.dispatch("marchepublics/getList").then(() => {
        setTimeout(() => {
      this.showContent = true;
    }, 2000); 
    });
  },
        methods: {
            toggleAnneeList() {
                this.anneeListVisible = !this.anneeListVisible;
            },
            selectAnnee(annee) {
                this.selectedAnnee = annee.libelle;
                this.anneeListVisible = false;
            },
            filterByAnnee() {
                if (this.selectedAnnee) {
                    this.filteredListByAnnee = this.listmarchepublics.filter(marchepublic => marchepublic.date_publication.split("-")[0] === this.selectedAnnee)
                } 
                else {
                    this.filteredListByAnnee = this.listmarchepublics
                }
            },
            filteredListByName(){
                return ( this.listmarchepublics.filter((component) => 
                    component.reference.toLowerCase().includes(this.input.toLowerCase()) ||   component.objet.toLowerCase().includes(this.input.toLowerCase())
                ))
            },
            combinedFilteredList() {
               
                const filteredByAnnee = this.filteredListByAnnee
                const filteredByName = this.filteredListByName()
                if(!this.selectedAnnee && !this.input)return this.listmarchepublics
                if(!this.selectedAnnee && this.input)return this.filteredListByName()
                if(this.selectedAnnee && !this.input)return this.filteredListByAnnee
                // Utilisez la méthode filter() pour filtrer les objets qui sont dans les deux listes filtrées
                if(this.selectedAnnee && this.input){
                    const filteredList = filteredByAnnee.filter((component) => filteredByName.includes(component))
                    return filteredList
                }
            },
            getUrlImage(url){
                return url.substring(str.indexOf('drupal-api') + 1);
            },
            onClickConsulter(item) {
                //alert('click')
                this.isPageLoad=true
                this.$modal.show(item);
            },
            
        },
        data() {
            return {
                anneeListVisible: false,
                annees: [
                    { id: 1, libelle: '2019', status: 'actif', created_at: '2022-10-20T12:47:48.000000Z', updated_at: '2022-10-20T12:47:48.000000Z' },
                    { id: 2, libelle: '2020', status: 'actif', created_at: '2022-10-20T12:47:48.000000Z', updated_at: '2022-10-20T12:47:48.000000Z' },
                    { id: 3, libelle: '2021', status: 'actif', created_at: '2022-10-20T12:47:48.000000Z', updated_at: '2022-10-20T12:47:48.000000Z' },
                    { id: 4, libelle: '2022', status: 'actif', created_at: '2022-10-20T12:47:48.000000Z', updated_at: '2022-10-20T12:47:48.000000Z' },
                    { id: 5, libelle: '2023', status: 'actif', created_at: '2022-10-20T12:47:48.000000Z', updated_at: '2022-10-20T12:47:48.000000Z' },
                    // Ajoutez les années que vous voulez afficher ici
                    ],
                selectedAnnee: '',
                filteredListByAnnee: [],
                showContent: false,
                input: '',
                search: '',
                isPageLoad:false,
                siteUrl:process.env.siteUrl,
                fileUrl:process.env.fileUrl,
                missions: [],
                mission_intro:[]
            }
        },
    };
</script>
<style >
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
.custom-bloc-mp {
    background: #fff;
    margin: 8px;
}
.custom-bloc-head {
    display: flex;
    justify-content: space-between;
}
.ref_ {
    background: #08b708;
    width: 100%;
    padding-left: 15px;
    color: #fff;
}
.del_ {
    background: #08b708de;
    width: 100%;
    padding-left: 15px;
    color: #fff;
}
.custom-select {
   height: 76.2px !important;
   width: 256px !important;
   margin-left: 50px;
   appearance: none;
   overflow: visible !important;
}
.custom-input {
   height: 76.2px !important;
   width: 437px !important;
   
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
.tbodyDiv{
max-height: 600px;
overflow: auto;
}
input[type="text"] {
  background-color: #fff;
}


.square-loader {
  height: 100%;
  width: 100%;
  animation: blink 1s infinite;
  
}
.centered {
  text-align: left;
  padding-bottom:30px;
  padding-right:40px;
  padding-left:0px;
  color: #adb5bd;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>


