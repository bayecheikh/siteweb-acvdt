<template>
    <div class="product-details-page-wrapper">
    <TheHeader />
    <Breadcrumb pageTitle="Candidatures" />
    <template>
  <div>
    
    <div class="card">
        <h2>Formulaire de candidature</h2>
      <div class="card-body">
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="reference">Référence :</label>
                <input type="text" id="reference" class="form-control" v-model="reference" disabled>
            </div>
          <div class="form-group">
            <label for="prenom">Prénom :</label>
            <input type="text" id="prenom" class="form-control" v-model="prenom" required>
          </div>
          <div class="form-group">
            <label for="nom">Nom :</label>
            <input type="text" id="nom" class="form-control" v-model="nom" required>
          </div>
          <div class="form-group">
            <label for="email">Adresse email :</label>
            <input type="email" id="email" class="form-control" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="codePays">Code pays :</label>
            <input type="text" id="codePays" class="form-control" v-model="codePays" required>
          </div>
          <div class="form-group">
            <label for="telephone">Numéro de téléphone :</label>
            <input type="tel" id="telephone" class="form-control" v-model="telephone" required>
          </div>
          <div class="form-group">
            <label for="cv">Importer votre CV :</label>
            <input type="file" id="cv" accept=".pdf,.doc,.docx" @change="onFileChange('cv', $event)">
          </div>
          <div class="form-group">
            <label for="motivation">Importer une lettre de motivation (facultatif) :</label>
            <input type="file" id="motivation" accept=".pdf,.doc,.docx" @change="onFileChange('motivation', $event)">
          </div>
          <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>

    <TheFooter />
</div>
</template>
<script>
export default {
    components: {
        TheHeader: () => import('@/components/TheHeader'),
        TheFooter: () => import("@/components/TheFooter")
    },
    data() {
    return {
      reference: '',
      prenom: '',
      nom: '',
      email: '',
      codePays: '',
      telephone: '',
      cv: null,
      motivation: null
    }
  },
  mounted(){
    const reference = this.$route.query.reference;
    this.reference = reference;
    console.log("ezqfhzeoifhqzeofhiuqrzehfrze", this.reference)
  },
    methods: {
    onFileChange(fieldName, event) {
      const file = event.target.files[0]
      this[fieldName] = file
    },
    submitForm() {
      const formData = new FormData()
      formData.append('reference', this.reference)
      formData.append('prenom', this.prenom)
      formData.append('nom', this.nom)
      formData.append('email', this.email)
      formData.append('codePays', this.codePays)
      formData.append('telephone', this.telephone)
      formData.append('cv', this.cv)
      formData.append('motivation', this.motivation)

      // TODO: Submit the form data to the server using an HTTP request
      console.log(formData)
    }
  }
}

</script>
<style>
.card{
    margin-left: 300px;
    margin-right: 300px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-left: 10px;
    padding-top: 10px;
}
h2{
    color: #555252;
}
.form-group {
    margin-bottom: 15px;
}
</style>