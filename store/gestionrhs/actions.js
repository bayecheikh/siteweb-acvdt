export default {
  getList({commit}) {
    this.$axios.$get('/allgestionrhs')
      .then(async (response) => {
        console.log('Données reçu+++++++++++', response)
        const nonExpiredGestionRhs = response.data.filter(gestionrh => new Date(gestionrh.date_limite) >= new Date())
        await commit('initlist', nonExpiredGestionRhs)
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
    async deletegestionrh({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}