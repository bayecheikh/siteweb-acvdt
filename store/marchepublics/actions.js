export default {
    getList({commit}){
      this.$axios.$get('/allmarchepublics')
      .then(async (response) => { 
        console.log('Données reçu+++++++++++',response)
        const now = new Date
        now.setHours(0, 0, 0, 0)
        const nonExpiredMarchesPublics = response.data.filter(marchepublic => new Date(marchepublic.date_limite) >= now)
        await commit('initlist', nonExpiredMarchesPublics)
          }).catch((error) => {
              console.log('Code error ++++++: ', error?.response?.data?.message)
              this.$toast.error(error?.response?.data?.message).goAway(3000)
          }).finally(() => {
            console.log('Requette envoyé ')
          });
    },
    async getDetail({commit},payload){
      console.log('Données detail reçu +++++++++++',payload)
      await commit('initdetail', payload)
    },
    async deletemarchepublic({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}