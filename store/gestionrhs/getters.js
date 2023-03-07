export default {
    listgestionrhs (state) {
      return state.listgestionrhs
    },
    listemplois (state) {
      return state.listgestionrhs.filter(gestionrh => {
      return gestionrh.categorie === 'emplois' && new Date(gestionrh.date_publication) <= new Date()
    }).sort((a, b) => new Date(b.date_publication) - new Date(a.date_publication))
    },
    liststages (state) {
      return state.listgestionrhs.filter(gestionrh => {
        return gestionrh.categorie === 'stages' && new Date(gestionrh.date_publication) <= new Date()
      }).sort((a, b) => new Date(b.date_publication) - new Date(a.date_publication))
    },
    headergestionrhs (state) {
      return state.headergestionrhs
    },
    detailgestionrh (state) {
      return state.detailgestionrh
    }
}